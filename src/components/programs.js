const React = require('react')
const { connect } = require('react-redux')
const { selectProgram } = require('../_actions')

const Programs = ({ programs, selectedProgramId, selectedDateId, dispatch }) => {
  console.log(programs)
  return(
    <div className= 'list-group'>
      {programs.map((program, key) => {
        return (
          <div key = {key}>
            <li
              className='list-group-item active'
            >
              { program.location }
            </li>
            { program.dates.map((date,index) =>
              <a
                href='#'
                key = {index}
                className = { selectedProgramId === program.id && selectedDateId === index ? 'list-group-item-success list-group-item' : 'list-group-item'}
                onClick = { () => dispatch(selectProgram(program.id, index)) }
              >
              {date}
              </a>) }
          </div>
        )
      }
    )}
    </div>
  )
}


const mapStateToProps = ({ selectedCategoryId, selectedProgramTypeId, selectedProgramId, selectedDateId, entities: { programs } }) => {
  const programsByCategoryAndType = Object
    .keys(programs)
    .map(key => programs[key])
    .filter(program =>  (program.programCategoryId === selectedCategoryId && program.programTypeId === selectedProgramTypeId)
    )

    return {
      programs: programsByCategoryAndType,
      selectedProgramId,
      selectedDateId
    }
  }

module.exports = connect(mapStateToProps)(Programs)
