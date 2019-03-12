import React from 'react';
import {changeDisplay} from '../actions'
import {connect} from 'react-redux';

const Instructions = (props) => {
  return (
    <div className="menu-background">
      <div className="menu-text">
        <h2>Instructions</h2>
        <p>The game consists of a series of movie clips. At some point, each clip will pause.</p>
        <p>When it pauses, you have 5 seconds to guess what the next line is! (Hint: It's a famous movie quote!)</p>
        <p>Say your guess out loud! You'll get a point for each correct guess.</p>
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
