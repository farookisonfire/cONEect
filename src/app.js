const React = require('react')
const { connect } = require('react-redux')
const { fetchYouthEmpowerment,fetchProgramTypes,fetchPrograms,fetchUser } = require('./actions')
const WelcomeText = require('./welcome')



const ToDos = ({ counter,user,programs,dispatch  }) => {

  const programTypes = programs.types.map((type)=>{
    return{type: type.type, typeVisible: type.typeVisible}
  })
  console.log(programTypes)
  var theTypes = [];
  programTypes.forEach(type => {
    if (type.typeVisible === true) {
      console.log('TRUE')
      theTypes.push(type.type)
      console.log(theTypes)
    } else {
      console.log('FALSE')
    }
  })

  const programCategories = programs.types.map((type)=>{
    return type.categories.map((category)=>{
      return {categoryName: category.category, categoryVisible: category.categoryVisible}
    })
  })
  console.log(programCategories)
  var theCategories = [];
  programCategories.forEach((type)=>{
    type.forEach((category)=>{
      switch(category.categoryVisible){
        case true: theCategories.push(category.categoryName);
        break;
        default: return theCategories
      }
    })
  })
  console.log(theCategories)

  return (
    <div>
      <WelcomeText user={'Kafka'}/>
      <h4>Your Action Items</h4>
      <ul className = 'list-group'>
        <li className = 'list-group-item' id="select-program" onClick={()=>dispatch(fetchProgramTypes(programs))}>Select Program</li>
      </ul>
      <div>
        {theTypes.map((type,key)=><li className='list-group-item' key={key} onClick={()=>dispatch(fetchYouthEmpowerment(programs))}>{type}</li>)}
      </div>
      <div>
        {theCategories.map((category, key)=><li className='list-group-item' key={key}>{category}</li>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.count,
    user: state.name,
    programs: state.programs
  }
}

module.exports = connect(mapStateToProps)(ToDos)
