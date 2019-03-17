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
