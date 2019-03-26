import React, {Component} from 'react'
import {changeDisplay} from '../actions'
import {connect} from 'react-redux'

class MainMenu extends Component {
  componentDidMount(){
    this.props.resetTranscript()
    this.props.startListening()
  }

  componentDidUpdate(){
    if(this.props.transcript.includes("start")){
      this.props.handleChange("START_GAME");
    }
  }

  render(){
    return (
      <div className="menu-background">
        <div className="menu-text">
          <h1>Status Quote</h1>
          <p>Say the word START to begin the game!</p>
          <button onClick={() => this.props.handleChange("INSTRUCTIONS")} className='start-btn'>Instructions</button>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    this.props.stopListening()
  }
}

const mapStateToProps = (state) => {
  return {
    stopListening: state.stopListening
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (display) => dispatch(changeDisplay(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
