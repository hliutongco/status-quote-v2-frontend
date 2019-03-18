import React from 'react'
import {connect} from 'react-redux'

const Scores = (props) => {
  return (
    <h2 id="score-text">Score: {props.score}</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Scores);
