const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./_store')
const Welcome = require('./components/welcome')
const ActionItems = require('./components/action-items')
const { Grid, Row, Col } = require('react-bootstrap')

ReactDOM.render(
  <Provider store={ store }>
    <Grid>
      <Row className="show-grid">
        <Col xs={6} xsOffset={3}>
          <div>
            <Welcome/>
            <ActionItems/>
          </div>
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById('app')
)
