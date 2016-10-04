const { createStore } = require('redux')
const rootReducer = require('./reducers')
const initialState = require('./initial-state')

const store = createStore(rootReducer, initialState)

module.exports = store
