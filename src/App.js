import React, { Component, Fragment } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import MainMenu from './components/MainMenu'
import Instructions from './components/Instructions'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount(){
    navigator.mediaDevices.getUserMedia({audio: true})
  }

  displayWhichComponent(){
    switch(this.props.displayedComponent) {
      case 'START_GAME':
        return <GameContainer/>
      case 'INSTRUCTIONS':
        return <Instructions/>
      default:
        return <MainMenu/>
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

const mapStateToProps = (store) => {
  return {
    displayedComponent: store.displayedComponent
  }
}

export default connect(mapStateToProps)(App);
