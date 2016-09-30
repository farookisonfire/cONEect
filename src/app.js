const React = require('react')
const { connect } = require('react-redux')
const { fetchUser } = require('./actions')
const { fetchPrograms } = require('./actions')


const Counter = ({ counter,user,programs,dispatch  }) => {
  dispatch(fetchUser());
  // dispatch(fetchPrograms());
  console.log(programs)
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <h4>Your Action Items</h4>
      <button id="select-program" onClick={()=>fetchPrograms()}>Select Program</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.count,
    user: state.name,
    programs: state.dates
  }
}

module.exports = connect(mapStateToProps)(Counter)
