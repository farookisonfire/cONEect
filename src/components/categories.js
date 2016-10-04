const React = require('react')
const { connect } = require('react-redux')

const Categories = ({ programCategories }) => {
  return(
    <ul className='list-group'>
      { programCategories.map((category,key) =>
        <li className='list-group-item' key={key}>{ category.name }</li>) }
    </ul>
  )
}

const mapStateToProps = ({ entities: { programCategories } }) => {
  return {
    programCategories: Object
      .keys(programCategories)
      .map((key) => programCategories[key])
  }
}

module.exports = connect(mapStateToProps)(Categories)
