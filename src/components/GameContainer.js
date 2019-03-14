import React, {Component, Fragment} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Scores from '../components/Scores'
import EndGame from './EndGame'
import Popup from './Popup';
import {clips} from '../clips'
import {connect} from 'react-redux'
import {changeNextVideo} from '../actions.js'

class GameContainer extends Component {
  displayWhichComponent = () => {
    console.log(this.props.gameStatus);
    switch(this.props.gameStatus){
      case "PAUSED":
        return <Popup transcript={this.props.transcript}
        startListening={this.props.startListening}
        resetTranscript={this.props.resetTranscript}
        stopListening={this.props.stopListening}/>
      case "ENDED":
        return <EndGame/>
      default:
        return <Scores />
    }
  }

  videoGenerator = () => {
    const videoPlayers = clips.map((clip) => <VideoPlayer key={clip.id} clip={clip}/>)

    function* nextVideo(array){
      let counter = 0;
      while (counter < array.length) {
        yield array[counter];
        counter++;
      }
    }

    // Use a value stored in redux
     // when to continue to the next value in the array
     // use a generator function?
     return nextVideo(videoPlayers)
  }

  useGenerator = () => {
    return this.videoGenerator().next().value
  }

  componentDidUpdate(){
    if(this.props.nextVideo){
      this.useGenerator()
      this.props.changeNextVideo(false)
    }
  }

  render(){
    return (
      <Fragment>
        {this.displayWhichComponent()}
        <div id="game-container">
          {this.useGenerator()}
        </div>
      </Fragment>
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
    changeNextVideo: (boolean) => dispatch(changeNextVideo(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
