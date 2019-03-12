import React from 'react'
import {changeDisplay} from '../actions'
import {connect} from 'react-redux'

const MainMenu = (props) => {
  return (
    <div className="menu-background">
      <div className="menu-text">
        <h2>Status Quote</h2>
        <p>Say the word START to begin the game!</p>
        <button onClick={() => props.handleClick("INSTRUCTIONS")} className='start-btn'>Instructions</button>
      </div>
    </div>
  )
}
// <button onClick={props.handleClick} className='start-btn'>Start Game</button>

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (display) => dispatch(changeDisplay(display))
  }
}

export default connect(null, mapDispatchToProps)(MainMenu)
