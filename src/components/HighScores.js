import React, {Fragment, useEffect, useState} from 'react';
import {changeDisplay, changeGameStatus} from '../actions'
import {connect} from 'react-redux';

const HighScores = (props) => {
  const [scores, getScores] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(data => getScores(data))
  }, [])

  const renderScoreTable = () => {
    return scores.map(scoreObj => renderScoreRow(scoreObj))
  }

  const renderScoreRow = (scoreObj) => {
    return (
      <tr key={scoreObj._id}>
        <td>{scoreObj.username}</td>
        <td>{scoreObj.score}</td>
      </tr>
    )
  }

  const handleSubmit = () => {
    props.handleRestart(null)
    props.handleChange(null)
  }

  return (
    <Fragment>
      <h1>High Scores</h1>
      <div id="score-table">
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {renderScoreTable()}
          </tbody>
        </table>
      </div>
      <button onClick={handleSubmit} className='start-btn'>Main Menu</button>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRestart: (display) => dispatch(changeGameStatus(display)),
    handleChange: (display) => dispatch(changeDisplay(display))
  }
}


export default connect(null, mapDispatchToProps)(HighScores)
