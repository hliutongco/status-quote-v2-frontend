import React, {Component} from 'react'
import Popup from './Popup';
import {connect} from 'react-redux'
import {sendVideo} from '../actions.js'
import EndGame from './EndGame'
import clips from '../clips'

class VideoPlayer extends Component {

  state = {
    index: 0,
    pause: false,
    firstPause: false,
    end: false,
    hintClicked: false,
    clickedVideo: null
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
  // quoteTime = () => {
  //   let vid = document.getElementById('vid')
  //   if(clips[this.state.index].time <= vid.currentTime && !this.state.firstPause){
  //     vid.pause();
  //     this.setState({firstPause: true, pause: true})
  //   }
  // }
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

  render() {

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
    return (
      <div className="Player">
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendVideo: (video) => dispatch(sendVideo(video))
  }
}

export default connect(null, mapDispatchToProps)(VideoPlayer);
