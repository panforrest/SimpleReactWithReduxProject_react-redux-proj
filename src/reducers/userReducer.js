import constants from '../constants'

var initialState = {
  all: []
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case constants.USER_CREATED:
      console.log('USER_CREATED: ' + JSON.stringify(action.data))
      return newState
  
    default:
	  return state
  }
}