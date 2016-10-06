const React = require('react')
const { connect } = require('react-redux')
const { selectType } = require('../_actions')

const ProgramTypes = ({ selectedProgramTypeId ,programTypes, dispatch }) => {
  return(
    <div className='list-group'>
      {programTypes.map((type, key)=>
        <a
          href= '#'
          className = {selectedProgramTypeId === type.id ? 'list-group-item active' : 'list-group-item'}
          key={key}
          onClick= { () => dispatch(selectType(type.id)) }
        >
          {type.name}
        </a>)}
    </div>
  )
}

const mapStateToProps = ({ selectedProgramTypeId ,selectedCategoryId, entities: { programs, programTypes } }) => {

  const programsByCategoryId = Object
    .keys(programs)
    .map(programId => programs[programId])
    .filter(program => program.programCategoryId === selectedCategoryId)


  const programTypesByCategoryId = Object
    .keys(programTypes)
    .map(programTypeId => programTypes[programTypeId])
    .filter(programType => {
      return programsByCategoryId.some(
        program => program.programTypeId === programType.id
      )
    })

  return {
    selectedProgramTypeId,
    programTypes: programTypesByCategoryId
  }
}


module.exports = connect(mapStateToProps)(ProgramTypes)
