const React = require('react')
const { connect } = require('react-redux')
const { selectCategory } = require('../_actions')

const Categories = ({ selectedCategoryId,programCategories, dispatch }) => {
  return(
    <ul className='list-group'>
      { programCategories.map((category,key) =>
        <li
          className={selectedCategoryId === category.id ? 'list-group-item active' : 'list-group-item'}
          key= { key }
          onClick = {() => dispatch(selectCategory(category.id))}
        >
            { category.name }
        </li>)
      }
    </ul>
  )
}

const mapStateToProps = ({ selectedCategoryId, entities: { programCategories } }) => {
  return {
    selectedCategoryId,
    programCategories: Object
      .keys(programCategories)
      .map((key) => programCategories[key])
  }
}

module.exports = connect(mapStateToProps)(Categories)
