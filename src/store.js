const { createStore } = require('redux')

const reducer= (state={count:0},action) => {
  let count = state.count || 0
  switch(action.type) {
    case 'INC': return Object.assign({},state,{count:count+1})
    case 'DEC': return Object.assign({},state,{count:count-1})
    case 'FETCH_USER_FULFILLED': return Object.assign({}, state, {name:action.payload.name})
    case 'FETCH_PROGRAMS': return Object.assign({}, state,{ dates: action.payload.programs})
    default: return state
  }
}

const store = createStore(reducer);

module.exports = store
