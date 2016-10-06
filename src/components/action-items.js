const React = require('react')
const { connect } = require('react-redux')
const Categories = require('./categories')
const ProgramTypes = require('./types')
const Programs = require('./programs')
const Confirm = require('./confirm')
const { displayCategories } = require('../_actions')



const ActionItems = ({ displayingCategories, selectedCategoryId, selectedProgramTypeId, selectedProgramId, dispatch }) => {
  return(
    <div>
      <h3>Your Action Items</h3>
      <div className='list-group'>
        <a
          href= '#'
          className='list-group-item'
          onClick={ () => dispatch(displayCategories()) }>
          Select Program
        </a>
      </div>
      {console.log(selectedProgramTypeId)}
      { displayingCategories ? <Categories/> : <div></div> }
      { selectedCategoryId > 0 ? <ProgramTypes/> : <div></div> }
      { selectedProgramTypeId > 0 ? <Programs/> : <div></div> }
      { selectedProgramId > 0 ? <Confirm/> : <div></div> }

    </div>
  )
}

const mapStateToProps = ({ displayingCategories, selectedCategoryId, selectedProgramTypeId, selectedProgramId }) => {
  return {
    displayingCategories,
    selectedCategoryId,
    selectedProgramTypeId,
    selectedProgramId
  }
}

module.exports = connect(mapStateToProps)(ActionItems)
