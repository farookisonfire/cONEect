const React = require('react')
const { connect } = require('react-redux')
const { fetchProgramTypes,fetchUser } = require('./actions')


const ToDos = ({ counter,user,programs,dispatch  }) => {
  dispatch(fetchUser());
  // console.log(programs)
  const programTypes = programs.types.map(type=>type.type)
  if (programs.programVisible === true) {
    var test = <div>Visibility is T</div>
    console.log('TRUE')
    console.log(test)
  } else {
    var test = null
    console.log('FALSE')
    console.log(test)
  }
  console.log(programTypes)
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <h4>Your Action Items</h4>
      <button id="select-program" onClick={()=>dispatch(fetchProgramTypes())}>Select Program</button>
      {test}
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
