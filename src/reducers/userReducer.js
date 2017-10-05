import constants from '../constants'

var initialState = {
  all: [],
  selected: {}
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case constants.USER_CREATED:
      console.log('USER_CREATED: ' + JSON.stringify(action.data))
      let updatedList = Object.assign([], newState.all)  //let updatedList = Object.assign({}, newState.all)
      updatedList.push(action.data)
      newState['all'] = updatedList
      return newState

    case constants.USER_SELECTED:
      console.log('USER_SELECTED: ' + JSON.stringify(action.data))
  
    default:
	  return state
  }
}