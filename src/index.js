const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./_store')
const Welcome = require('./components/welcome')
const ActionItems = require('./components/action-items')


ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Welcome/>
      <ActionItems/>
    </div>
  </Provider>,
  document.getElementById('app')
)
