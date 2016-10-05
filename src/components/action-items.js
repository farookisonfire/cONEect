const React = require('react')
const { connect } = require('react-redux')
const Categories = require('./categories')
const ProgramTypes = require('./types')
const Programs = require('./programs')
const { displayCategories } = require('../_actions')



const ActionItems = ({ displayingCategories, selectedCategoryId, selectedProgramTypeId, dispatch }) => {
  return(
    <div>
      <h3>Your Action Items</h3>
      <ul className='list-group'>
        <li
          className='list-group-item'
          onClick={ () => dispatch(displayCategories()) }>
          Select Program
        </li>
      </ul>
      {console.log(selectedProgramTypeId)}
      { displayingCategories ? <Categories/> : <div></div> }
      { selectedCategoryId > 0 ? <ProgramTypes/> : <div></div> }
      { selectedProgramTypeId > 0 ? <Programs/> : <div></div> }
    </div>
  )
}

const mapStateToProps = ({ displayingCategories, selectedCategoryId, selectedProgramTypeId }) => {
  return {
    displayingCategories,
    selectedCategoryId,
    selectedProgramTypeId
  }
}

module.exports = connect(mapStateToProps)(ActionItems)
