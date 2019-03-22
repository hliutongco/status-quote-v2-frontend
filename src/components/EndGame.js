import React, {Fragment, useState, useEffect} from 'react'
import {updateScore} from '../actions'
import {connect} from 'react-redux'
import HighScores from './HighScores'

const EndGame = (props) => {

  const [ submitted, toggleSubmit ] = useState(false);

  useEffect(() => props.startListening(), [])

  const handleSubmit = () => {
    if(!props.transcript) return

    fetch('http://localhost:3000/scores', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: props.transcript,
        score: props.score
      })
    }).then(() => {
      props.resetTranscript()
      props.stopListening()
      props.updateScore(0)
      toggleSubmit(true)
    })
  }

  const renderGameOver = () => {
    return (
      <Fragment>
        <h1>Game Over!</h1>
        <h2>Final Score:</h2>
        <h2>{props.score}</h2>
        <p>Say Your Name:</p>
        <p>{props.transcript}</p>
        <button onClick={() => props.resetTranscript()} className='start-btn'>Re-Record</button>
        <button onClick={handleSubmit} className='start-btn'>Submit</button>
      </Fragment>
    )
  }

  return (
    <div id="end-game">
      { submitted ? <HighScores/> : renderGameOver() }
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
    updateScore: (score) => dispatch(updateScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
