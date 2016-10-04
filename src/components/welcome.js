const React = require('react')
const { connect } = require('react-redux')
const { fetchUser } = require('../actions')
const logo = require('../logo.png')

const Welcome = ({user}) => {
  return(
    <div>
      <img style={{maxWidth:'300px', textAlign: 'center'}} src={logo} />
      <h1>Welcome {user}!</h1>
    </div>
  )
}

module.exports = Welcome
