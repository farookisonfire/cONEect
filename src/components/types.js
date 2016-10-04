const { connect } = require('react-redux')


const ProgramTypes = ({ programTypes }) => {
  return(
    <ul className='list-group'>
      {programTypes.map((type, key)=>
        <li className='list-group-item' key={key}>{type.name}</li>)}
    </ul>
  )
}

const mapStateToProps = ({ selectedCategoryId, entities: { programs, programTypes } }) => {

  const programsByCategoryId = Object
    .keys(programs)
    .map(programId => programs[programId])
    .filter(program => program.programCategoryId === selectedCategoryId)

  const programsTypesByCategoryId = Object
    .keys(programTypes)
    .map(programTypeId => programTypes[programTypeId])
    .filter(programType => {
      return programsByCategoryId.some(
        program => program.programTypeId === programType.id
      )
    })

  return {
    programTypes: programsTypesByCategoryId
  }
}


module.exports = connect(mapStateToProps)(ProgramTypes)
