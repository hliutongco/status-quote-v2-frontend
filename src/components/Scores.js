import React from 'react'
import {connect} from 'react-redux'

class Scores extends React.Component {

  render () {
    return (
      <div className="player-container">
        <h2>Score</h2>
        <h2>{this.props.score}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Scores);
