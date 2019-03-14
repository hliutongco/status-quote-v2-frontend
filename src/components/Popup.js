import React from 'react'
import {connect} from 'react-redux'
import {updatePlayer1, updatePlayer2, changeGameStatus, changeVideoStatus} from '../actions'


class Popup extends React.Component {
  state = {
    time: 1
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

    // if(this.props.transcript === this.props.video.quote){
    //   if(this.props.video.title === 'A League of Their Own' || this.props.video.title === 'A Few Good Men'){
    //     this.props.updatePlayer1()
    //   }
    //   else if (this.props.video.title === 'Back to the Future 2' || this.props.video.title === 'Star Wars: The Empire Strikes Back') {
    //     this.props.updatePlayer2()
    //   }
    // }

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
    // updatePlayer1: () => dispatch(updatePlayer1),
    // updatePlayer2: () => dispatch(updatePlayer2),
    handlePause: (status) => dispatch(changeGameStatus(status)),
    changeVideoStatus: (boolean) => dispatch(changeVideoStatus(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
