import React from 'react'
import {connect} from 'react-redux'
import {changeGameStatus, changeVideoStatus, updateScore, saveTranscript} from '../actions'


class Popup extends React.Component {
  state = {
    hintClicked: false,
    time: 10
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({time: this.state.time - 1})
      }, 1000)
    this.props.resetTranscript()
    this.props.startListening()
  }

  componentDidUpdate(){
    if(!this.state.time){
      this.props.handlePause(null)
    }
  }

  componentWillUnmount() {
    const correctAnswer = this.props.transcript.toLowerCase().includes(this.props.clip.quote)

    if(correctAnswer && !this.state.hintClicked){
      this.props.updateScore(this.props.score + 2)
    }
    else if(correctAnswer && this.state.hintClicked){
      this.props.updateScore(this.props.score + 1)
    }

    this.props.saveTranscript(this.props.transcript)
    this.props.stopListening()
    this.props.changeVideoStatus(true)
    clearInterval(this.interval);
  }

  hintyClicked = () => {
    this.setState({
      hintClicked: true
    })
  }

  render () {
    return (
      <div id='popup'>
        <h1>Guess the line</h1>
        <h2>Time left: {this.state.time}</h2>
        <p><button onClick={this.props.resetTranscript}>Re-Record</button></p>
        <p><button onClick={() => this.props.handlePause(null)}>Submit</button></p>
        <h3 id="popup-transcript">{this.props.transcript}</h3>
        {this.state.hintClicked ? <h2 id='hint-text'>{this.props.clip.hint}</h2> : ""}
        <button onClick={this.hintyClicked} id='hint-btn'>Give Me A Hint</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video,
    score: state.score,
    clip: state.clip,
    startListening: state.startListening,
    stopListening: state.stopListening,
    resetTranscript: state.resetTranscript
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTranscript: (transcript) => dispatch(saveTranscript(transcript)),
    handlePause: (status) => dispatch(changeGameStatus(status)),
    changeVideoStatus: (boolean) => dispatch(changeVideoStatus(boolean)),
    updateScore: (score) => dispatch(updateScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
