const React = require('react')
const ReactDOM = require('react-dom')
const Counter = require('./app')
const { Provider } = require('react-redux')
const store = require('./store')

ReactDOM.render(
  <Provider store={ store }>
    <Counter/>
  </Provider>,
  document.getElementById('app')
)
