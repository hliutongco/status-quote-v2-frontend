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
    this.video.play()
  }

  // next = () => {
  //   if (this.state.index + 1 < clips.length) {
  //     this.setState((prevState) => {
  //       return {
  //         index: prevState.index + 1,
  //         firstPause: false
  //       }
  //     })
  //   } else {
  //     this.setState({end: true})
  //   }
  // }
  //
  quoteTime = () => {
    console.log(this.props.clip.time);
    // console.log(this.video.currentTime);
    if(this.props.clip.time = this.video.currentTime){
      // this.video.pause();
    }
  }
  //
  // unPause = () => {
  //   let vid = document.getElementById('vid')
  //   this.setState({pause: false})
  //   vid.play();
  // }
  //
  // getPopup = () => {
  //   if (this.state.pause){
  //     return <Popup pause={this.unPause}/>
  //   }
  // }
  //
  // hintyClicked = (id) => {
  //   this.setState({
  //     hintClicked: !this.state.hintClicked
  //   })
  // }

    // if (this.state.end){
    //   return <EndGame/>
    // }

    // const match = clips.find((obj) => obj.id === id);

    // <video id='vid' onPlay={() => this.props.sendVideo(clips[this.state.index])} onEnded={this.next}
    // onTimeUpdate={this.quoteTime}
    //
    // autoPlay="autoplay"
    // src={clips[this.state.index].link}
    // width="300"
    // height="200">
    // Sorry, your browser doesn{"'"}t support embedded videos.
    // </video>
    // <button onClick={() => this.hintyClicked(clips[this.state.index].id)} className='hint-btn'>Hint</button>
    // return this.state.hintClicked ? <h1 className='hintmatch'>{match}</h1> : ""
    //
    // {this.getPopup()}
    // {this.state.pause && <Popup pause={this.unPause}/>}
  componentDidUpdate(){
    if(this.props.continueVideo){
      this.props.changeVideoStatus(false)
      this.video.play()
    }
  }

  render() {
    return (
      <div className="Player">
        <video onPause={() => this.props.handlePause("PAUSED")}
        onTimeUpdate={this.quoteTime}
        onEnded={() => changeNextVideo(true)}
        src={this.props.clip.link}
        ref={(video) => this.video = video}>
        Sorry, your browser doesn't support embedded videos.
        </video>
        {this.props.clip.title}
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
