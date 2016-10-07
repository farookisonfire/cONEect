const React = require('react')
const { connect } = require('react-redux')
const Categories = require('./categories')
const ProgramTypes = require('./types')
const Programs = require('./programs')
const Confirm = require('./confirm')
const { displayCategories } = require('../_actions')

const Fundraising = require('./fundraising')

const ActionItems = ({ displayingCategories, displayingTypes, displayingPrograms, displayingConfirmButton, selectedCategoryId, selectedProgramTypeId, selectedProgramId, programConfirmed, dispatch }) => {
  return(
    <div>
      <h3>Your Action Items</h3>
      <div className='list-group'>
        <a
          href= '#'
          className='list-group-item'
          style={ programConfirmed ? {color:'white' ,backgroundColor:'green', boxShadow: '10px 10px 5px #888888'}: null}
          onClick={ () => dispatch(displayCategories()) }>
          { programConfirmed &&
            <i
              className="fa fa-check-square fa-lg"
              aria-hidden="true"
              style={{paddingRight: '10%'}}
            >
            </i>}
          Select Program
        </a>
      </div>
      <Fundraising/>
      {console.log(selectedProgramTypeId)}
      { displayingCategories ? <Categories/> : <div></div> }
      { selectedCategoryId > 0 && displayingTypes ? <ProgramTypes/> : <div></div> }
      { selectedProgramTypeId > 0 && displayingPrograms ? <Programs/> : <div></div> }
      { selectedProgramId > 0 && displayingConfirmButton ? <Confirm/> : <div></div> }

    </div>
  )
}

const mapStateToProps = ({ displayingCategories, displayingTypes, displayingPrograms, displayingConfirmButton, selectedCategoryId, selectedProgramTypeId, selectedProgramId, programConfirmed }) => {
  return {
    displayingCategories,
    displayingTypes,
    displayingPrograms,
    displayingConfirmButton,
    selectedCategoryId,
    selectedProgramTypeId,
    selectedProgramId,
    programConfirmed
  }
}

module.exports = connect(mapStateToProps)(ActionItems)
