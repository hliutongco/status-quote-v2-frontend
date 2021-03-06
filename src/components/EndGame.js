import React, {Fragment, useState, useEffect} from 'react'
import {updateScore} from '../actions'
import {connect} from 'react-redux'
import HighScores from './HighScores'

const EndGame = (props) => {

  const [ submitted, toggleSubmit ] = useState(false);

  useEffect(() => {
    props.resetTranscript()
    props.startListening()
  }, [])

  const handleSubmit = (username) => {
    if(!props.transcript) return

    fetch('https://status-quote-backend.herokuapp.com/scores', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
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
    const username = props.transcript.length > 15 ? props.transcript.substring(0,15) + '...' : props.transcript
    return (
      <Fragment>
        <h1>Game Over!</h1>
        <h2>Final Score:</h2>
        <h2>{props.score}</h2>
        <p>Say Your Name:</p>
        <p>{username}</p>
        <button onClick={() => props.resetTranscript()} className='start-btn'>Re-Record</button>
        <button onClick={() => handleSubmit(username)} className='start-btn'>Submit</button>
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
    score: state.score,
    startListening: state.startListening,
    stopListening: state.stopListening,
    resetTranscript: state.resetTranscript
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: (score) => dispatch(updateScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
