const React = require('react')
const { connect } = require('react-redux')
const { fetchProgramTypes,fetchPrograms,fetchUser } = require('./actions')



const ToDos = ({ counter,user,programs,dispatch  }) => {

  console.log('gate 1' + programs)
  const programTypes = programs.types.map(type=>type.type)
  console.log(programs.types[0].typeVisible)
  var theTypes = null;
  programs.types.forEach(type => {
  var thePrograms = 'hey';
    if (type.typeVisible === true) {
      console.log('TRUE')
      var theTypes = 'hello'
    } else {
      console.log('FALSE')
      var theTypes = null
    }
  })

  console.log('test' + programTypes)
  return (
    <div>
      {console.log('these are the types: '+theTypes)}
      <h2>Welcome, {user}!</h2>
      <h4>Your Action Items</h4>
      <button id="select-program" onClick={()=>dispatch(fetchProgramTypes(programs))}>Select Program</button>
      <div>{theTypes}</div>
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
