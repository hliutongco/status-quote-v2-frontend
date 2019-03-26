export const saveStartListening = (func) => {
  return {
      type: 'SAVE_START_LISTENING',
      payload: func
    }
  }

export const saveStopListening = (func) => {
  return {
      type: 'SAVE_STOP_LISTENING',
      payload: func
    }
  }

export const saveResetTranscript = (func) => {
  return {
      type: 'SAVE_RESET_TRANSCRIPT',
      payload: func
    }
  }

export const saveTranscript = (transcript) => {
  return {
      type: 'SAVE_TRANSCRIPT',
      payload: transcript
    }
  }

export const changeDisplay = (display) => {
  return {
      type: 'CHANGE_DISPLAY',
      payload: display
    }
  }

export const changeGameStatus = (status) => {
  return {
      type: 'CHANGE_GAME_STATUS',
      payload: status
    }
  }

export const changeVideoStatus = (boolean) => {
  return {
      type: 'CHANGE_VIDEO_STATUS',
      payload: boolean
    }
  }

export const changeNextVideo = (boolean) => {
  return {
      type: 'CHANGE_NEXT_VIDEO',
      payload: boolean
    }
  }

export const saveClip = (clip) => {
  return {
    type: 'SAVE_CLIP',
    payload: clip
  }
}

export const updateScore = (score) => {
  return {
    type: 'UPDATE_SCORE',
    payload: score
  }
}
