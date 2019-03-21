import React, {Fragment, useState, useEffect} from 'react'
import {changeDisplay, changeGameStatus, updateScore} from '../actions'
import {connect} from 'react-redux'


const EndGame = (props) => {
  useEffect(() => {
    return () => {
       props.handleRestart(null)
       props.updateScore(0)
   }
  })

  return (
    <div id="end-game">
      <h1>Game Over!</h1>
      <h2>Final Score:</h2>
      <h2>{props.score}</h2>
      <button onClick={() => props.handleChange(null)} className='start-btn'>Main Menu</button>
    </div>
  )
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
