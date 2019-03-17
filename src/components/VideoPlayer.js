import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {changeGameStatus, changeVideoStatus, changeNextVideo, saveClip} from '../actions.js'

class VideoPlayer extends Component {

  state = {
    index: 0,
    clickedVideo: null,
    showCountdown: false
  }

  componentDidMount(){
    this.props.saveClip(this.props.clip)

    // This is the transition/countdown animation
    this.setState({showCountdown: true}, () => {
      setTimeout(() => this.setState({showCountdown: false}), 2500)
    })

    // This delay is to make time for the transition animation
    setTimeout(() => {
      this.timeout = setTimeout(() => this.video.pause(), this.props.clip.time)
      this.video.play()
    }, 2500)
  }

  componentDidUpdate(){
    if(this.props.continueVideo){
      this.props.changeVideoStatus(false)
      this.video.play()
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.showCountdown ? <img alt="countdown" id="countdown" src="./countdown.gif"/> : null}
        <video onPause={() => this.video.currentTime < Math.floor(this.video.duration) && this.props.handlePause("PAUSED")}
        onTimeUpdate={this.quoteTime}
        onEnded={() => this.props.changeNextVideo(true)}
        src={this.props.clip.link}
        ref={(video) => this.video = video}>
        Sorry, your browser doesn't support embedded videos.
        </video>
        <h2>{this.props.clip.title}</h2>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    continueVideo: state.videoStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePause: (display) => dispatch(changeGameStatus(display)),
    changeVideoStatus: (boolean) => dispatch(changeVideoStatus(boolean)),
    changeNextVideo: (boolean) => dispatch(changeNextVideo(boolean)),
    saveClip: (quote) => dispatch(saveClip(quote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
