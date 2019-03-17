import React, {Component} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Scores from '../components/Scores'
import EndGame from './EndGame'
import Popup from './Popup';
import {clips} from '../clips'
import {connect} from 'react-redux'
import {changeNextVideo, changeGameStatus} from '../actions.js'

class GameContainer extends Component {
  state = {
    counter: 0,
    generatedObj: {value: null}
  }

  displayWhichComponent = () => {
    switch(this.props.gameStatus){
      case "PAUSED":
        return <Popup
        transcript={this.props.transcript}
        startListening={this.props.startListening}
        resetTranscript={this.props.resetTranscript}
        stopListening={this.props.stopListening}/>
      case "ENDED":
        return <EndGame />
      default:
        return <Scores />
    }
  }

  createVideoGenerator = () => {
    const videoPlayers = clips.map((clip) => <VideoPlayer key={clip.id} clip={clip}/>)

    // continue to the next video player in the array
    // using a generator function
    function* nextVideo(array){
      while (this.state.counter < array.length) {
        this.setState({ counter: this.state.counter + 1 })
        yield array[this.state.counter]
      }
    }

    // the generator function loses the context of 'this'
    // use 'this.nextVideo' to avoid a function assignment warning
    this.nextVideo = nextVideo.bind(this)
    return this.nextVideo(videoPlayers)
  }

  useGenerator = () => {
    // Create the generator function then call .next()
    // and save the returned object into state
    this.setState({ generatedObj: this.createVideoGenerator().next() }, () => {
      if(!this.state.generatedObj.value){
        this.props.handleChange("ENDED")
      }
    })
  }

  componentDidMount(){
    this.useGenerator()
  }

  componentDidUpdate(){
    if(this.props.nextVideo){
      this.props.changeNextVideo(false)
      this.useGenerator()
    }
  }

  render(){
    return (
      <div id="game-container">
        {this.displayWhichComponent()}
        <div id="game-container">
          {this.state.generatedObj.value}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameStatus: state.gameStatus,
    nextVideo: state.nextVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeNextVideo: (boolean) => dispatch(changeNextVideo(boolean)),
    handleChange: (display) => dispatch(changeGameStatus(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
