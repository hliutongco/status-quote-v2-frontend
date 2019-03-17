import React, {Component} from 'react'
import {changeDisplay, changeGameStatus, updateScore} from '../actions'
import {connect} from 'react-redux'

class EndGame extends Component {
  componentWillUnmount(){
      this.props.handleRestart(null)
      this.props.updateScore(0)
  }

  render(){
    return (
      <div id="end-game">
        <h1>Game Over!</h1>
        <h2>Final Score:</h2>
        <h2>{this.props.score}</h2>
        <button onClick={() => this.props.handleChange(null)} className='start-btn'>Main Menu</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (display) => dispatch(changeDisplay(display)),
    handleRestart: (display) => dispatch(changeGameStatus(display)),
    updateScore: (score) => dispatch(updateScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
