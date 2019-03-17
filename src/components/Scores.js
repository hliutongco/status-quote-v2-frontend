import React from 'react'
import {connect} from 'react-redux'

class Scores extends React.Component {

  render() {
    return (
      <h2 id="score-text">Score: {this.props.score}</h2>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Scores);
