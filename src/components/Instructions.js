import React from 'react';
import {changeDisplay} from '../actions'
import {connect} from 'react-redux';

const Instructions = (props) => {
  return (
    <div className="menu-background">
      <div className="menu-text">
        <h1>Instructions</h1>
        <ul>
          <li>The game consists of a series of movie clips. At some point, each clip will pause.</li>
          <li>When it pauses, you have 10 seconds to guess what the next line is! (Hint: It's a famous movie quote!)</li>
          <li>Say your guess out loud! You'll get two points for each correct guess.</li>
          <li>However, if you ask for a hint, you will only get one point for a correct guess.</li>
        </ul>
        <button onClick={() => props.handleClick(null)} className='start-btn'>Go Back</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (display) => dispatch(changeDisplay(display))
  }
}

export default connect(null, mapDispatchToProps)(Instructions)
