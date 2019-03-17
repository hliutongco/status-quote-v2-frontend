import React from 'react'
import {changeDisplay} from '../actions'
import {connect} from 'react-redux'

const EndGame = (props) => {
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
    handleChange: (display) => dispatch(changeDisplay(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
