import React, { Component, Fragment } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import MainMenu from './components/MainMenu'
import Instructions from './components/Instructions'
import SpeechRecognition from 'react-speech-recognition'
import {connect} from 'react-redux'
import {saveStartListening, saveStopListening, saveResetTranscript, saveTranscript} from './actions'

class App extends Component {

  componentDidMount(){
    navigator.mediaDevices.getUserMedia({audio: true})
    this.props.saveStartListening(this.props.startListening)
    this.props.saveStopListening(this.props.stopListening)
    this.props.saveResetTranscript(this.props.resetTranscript)
    this.props.saveTranscript(this.props.transcript)
  }

  displayWhichComponent(){
    switch(this.props.displayedComponent) {
      case 'START_GAME':
        return <GameContainer transcript={this.props.transcript}/>
      case 'INSTRUCTIONS':
        return <Instructions/>
      default:
        return <MainMenu transcript={this.props.transcript}
        startListening={this.props.startListening}
        resetTranscript={this.props.resetTranscript}
        stopListening={this.props.stopListening}/>
    }
  }

  render() {
    return (
      <Fragment>
        {this.displayWhichComponent()}
      </Fragment>
    );
  }
}

const options = {
  autoStart: false
}

const mapStateToProps = (store) => {
  return {
    displayedComponent: store.displayedComponent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveStartListening: (func) => dispatch(saveStartListening(func)),
    saveStopListening: (func) => dispatch(saveStopListening(func)),
    saveResetTranscript: (func) => dispatch(saveResetTranscript(func)),
    saveTranscript: (transcript) => dispatch(saveTranscript(transcript))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(options)(App));
