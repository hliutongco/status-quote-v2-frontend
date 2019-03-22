import React, { Component, Fragment } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import MainMenu from './components/MainMenu'
import Instructions from './components/Instructions'
import SpeechRecognition from 'react-speech-recognition'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount(){
    navigator.mediaDevices.getUserMedia({audio: true})
    
  }

  displayWhichComponent(){
    switch(this.props.displayedComponent) {
      case 'START_GAME':
        return <GameContainer transcript={this.props.transcript}
        startListening={this.props.startListening}
        resetTranscript={this.props.resetTranscript}
        stopListening={this.props.stopListening}/>
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

export default connect(mapStateToProps)(SpeechRecognition(options)(App));
