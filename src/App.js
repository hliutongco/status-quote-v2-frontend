import React, { Component, Fragment } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import MainMenu from './components/MainMenu'
import Instructions from './components/Instructions'
import {connect} from 'react-redux'
import SpeechRecognition from 'react-speech-recognition'
import {saveStartListening, saveStopListening, saveResetTranscript, changeDisplay} from './actions'

class App extends Component {

  componentDidMount(){
    fetch('https://status-quote-backend.herokuapp.com/scores')
    .then(data => this.props.changeDisplay(null))

    navigator.mediaDevices.getUserMedia({audio: true})
    this.props.saveResetTranscript(this.props.resetTranscript)
    this.props.saveStartListening(this.props.startListening)
    this.props.saveStopListening(this.props.stopListening)
  }

  displayWhichComponent(){
    switch(this.props.displayedComponent) {
      case 'LOADING':
        return (
          <Fragment>
            <div className="lds-dual-ring">Loading</div>
          </Fragment>
        )
      case 'START_GAME':
        return <GameContainer transcript={this.props.transcript}/>
      case 'INSTRUCTIONS':
        return <Instructions/>
      default:
        return <MainMenu resetTranscript={this.props.resetTranscript} startListening={this.props.startListening} transcript={this.props.transcript}/>
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
    changeDisplay: (display) => dispatch(changeDisplay(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(options)(App));
