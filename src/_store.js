const { createStore } = require('redux')
const rootReducer = require('./reducers')
const initialState = require('./initial-state')
const { enableBatching } = require('redux-batched-actions')


window.store = createStore(enableBatching(rootReducer), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

module.exports = store
