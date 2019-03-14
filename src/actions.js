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

export const sendVideo = (video) => {
  return {
    type: 'SEND_VIDEO',
    payload: video
  }
}

export const updatePlayer1 = {
  type: 'UPDATE_PLAYER1',
  payload: 1
}

export const updatePlayer2 = {
  type: 'UPDATE_PLAYER2',
  payload: 1
}
