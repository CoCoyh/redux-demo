const createStore = (reducer) => {
  var state = null
  const getState = () => {
    return state
  }
  const listeners = []
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({})
  
  const subscribe = (listener) => {
    listeners.push(listener)
  }
  return {
    subscribe,
    dispatch,
    getState
  }
}

var redux = {}
redux.createStore = createStore