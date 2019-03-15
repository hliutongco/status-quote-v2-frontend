import React from 'react'
import {connect} from 'react-redux'
import {changeGameStatus, changeVideoStatus} from '../actions'


class Popup extends React.Component {
  state = {
    time: 10
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({time: this.state.time - 1})
      }, 1000)
    this.props.resetTranscript()
    this.props.startListening()
  }

  componentDidUpdate(){
    if(!this.state.time){
      this.props.handlePause(null)
    }
  }

  componentWillUnmount() {
    this.props.stopListening()
    this.props.changeVideoStatus(true)
    clearInterval(this.interval);
  }

  render () {
    return (
      <div className='popup'>
        <h1>Guess the line</h1>
        <h2>Time left: {this.state.time}</h2>
        <button className='start-btn' onClick={this.props.resetTranscript}>Re-Record</button>
        <h3>{this.props.transcript}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePause: (status) => dispatch(changeGameStatus(status)),
    changeVideoStatus: (boolean) => dispatch(changeVideoStatus(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
