const React = require('react')
const ReactDOM = require('react-dom')
const ToDos = require('./app')
const { Provider } = require('react-redux')
const store = require('./store')

ReactDOM.render(
  <Provider store={ store }>
    <ToDos/>
  </Provider>,
  document.getElementById('app')
)
