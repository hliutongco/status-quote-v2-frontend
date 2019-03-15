const initialState = {
  displayedComponent: null,
  video: null,
  player1: 0,
  player2: 0,
  gameStatus: null,
  videoStatus: false,
  nextVideo: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_DISPLAY':
      return {...state, displayedComponent: action.payload}
    case 'CHANGE_GAME_STATUS':
      return {...state, gameStatus: action.payload}
    case 'CHANGE_VIDEO_STATUS':
      return {...state, videoStatus: action.payload}
    case 'CHANGE_NEXT_VIDEO':
      return {...state, nextVideo: action.payload}
    case 'SEND_VIDEO':
      return {...state, video: action.payload}
    case 'UPDATE_PLAYER1':
      return {...state, player1: state.player1 + action.payload}
    case 'UPDATE_PLAYER2':
      return {...state, player2: state.player2 + action.payload}
    default:
      return state
  }
}
