const React = require('react')
const { connect } = require('react-redux')
const Categories = require('./categories')
const { displayCategories } = require('../_actions')



const ActionItems = ({ displayingCategories, dispatch }) => {
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
      { displayingCategories ? <Categories/> : <div></div> }
    </div>
  )
}

const mapStateToProps = ({ displayingCategories }) => {
  return {
    displayingCategories
  }
}

module.exports = connect(mapStateToProps)(ActionItems)
