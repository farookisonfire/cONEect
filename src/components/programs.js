const React = require('react')
const { connect } = require('react-redux')

const Programs = ({ programs }) => {
  console.log(programs)
  return(
    <ul className= 'list-group'>
      {programs.map((program, key) => {
        return (
          <div key = {key}>
            <li
              className='list-group-item active'

            >
              {program.location}
            </li>
            {program.dates.map((date,key) =>
              <li
                key = {key}
                className = 'list-group-item'
              >{date}</li>)}
          </div>
        )
      }
    )}
    </ul>
  )
}


const mapStateToProps = ({ selectedCategoryId, selectedProgramTypeId, entities: { programs } }) => {
  const programsByCategoryAndType = Object
    .keys(programs)
    .map(key => programs[key])
    .filter(program =>  (program.programCategoryId === selectedCategoryId && program.programTypeId === selectedProgramTypeId)
    )

    return {
      programs: programsByCategoryAndType
    }
  }

module.exports = connect(mapStateToProps)(Programs)
