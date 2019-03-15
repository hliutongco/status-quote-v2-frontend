import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeGameStatus, changeVideoStatus, changeNextVideo} from '../actions.js'

class VideoPlayer extends Component {

  state = {
    index: 0,
    pause: false,
    firstPause: false,
    hintClicked: false,
    clickedVideo: null
  }

  componentDidMount(){
    this.timeout = setTimeout(() => this.video.pause(), this.props.clip.time)
    this.video.play()
  }

  hintyClicked = () => {
    this.setState({
      hintClicked: !this.state.hintClicked
    })
  }

  componentDidUpdate(){
    if(this.props.continueVideo){
      this.props.changeVideoStatus(false)
      this.video.play()
    }
  }

  render() {
    return (
      <div className="Player">
        <video onPause={() => this.video.currentTime < Math.floor(this.video.duration) && this.props.handlePause("PAUSED")}
        onTimeUpdate={this.quoteTime}
        onEnded={() => this.props.changeNextVideo(true)}
        src={this.props.clip.link}
        ref={(video) => this.video = video}>
        Sorry, your browser doesn't support embedded videos.
        </video>
        <h2>{this.props.clip.title}</h2>
        {this.state.hintClicked ? <h1 className='hintmatch'>{this.props.clip.hint}</h1> : ""}
        <button onClick={this.hintyClicked} className='hint-btn'>Hint</button>
      </div>
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
    changeNextVideo: (boolean) => dispatch(changeNextVideo(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
