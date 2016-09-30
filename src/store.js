const { createStore } = require('redux')

const defaultStore = {
  count: 0,
  programs: ['CAPE TOWN 1', 'CAPE TOWN 2', 'CAPE TOWN 3']
}

const reducer= (state=defaultStore,action) => {
  let count = state.count || 0
  switch(action.type) {
    case 'FETCH_USER_FULFILLED': return Object.assign({}, state, {name:action.payload.name})
    default: return state
  }
}

const store = createStore(reducer);

module.exports = store
