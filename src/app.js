const React = require('react')
const { connect } = require('react-redux')
const { fetchUser } = require('./actions')
const { fetchPrograms } = require('./program-actions')


const ToDos = ({ counter,user,programs,dispatch  }) => {
  dispatch(fetchUser());
  console.log(programs)
  const programList = programs.map((program, id)=><li key={id}>{program}</li>)

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <h4>Your Action Items</h4>
      <button id="select-program">Select Program</button>
      <ul>{ programList }</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.count,
    user: state.name,
    programs: state.programs
  }
}

module.exports = connect(mapStateToProps)(ToDos)
