const initialState = {
  displayedComponent: null,
  clip: null,
  score: 0,
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
    case 'SAVE_CLIP':
      return {...state, clip: action.payload}
    case 'UPDATE_SCORE':
      return {...state, score: action.payload}
    default:
      return state
  }
}
