const React = require('react')
const { connect } = require('react-redux')
const { fetchYouthEmpowerment,fetchProgramTypes,fetchPrograms,fetchUser } = require('./actions')



const ToDos = ({ counter,user,programs,dispatch  }) => {

  console.log('gate 1.0' + programs)
  const programTypes = programs.types.map((type)=>{
    return{type: type.type, typeVisible: type.typeVisible}
  })
  console.log(programTypes)
  console.log(programs.types[0].typeVisible)
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
  console.log('The categories: ')
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

  console.log('visible categories: ')
  console.log(theCategories)


  return (
    <div>
      {console.log('these are the types: '+theTypes)}
      <h2>Welcome, {user}!</h2>
      <h4>Your Action Items</h4>
      <button id="select-program" onClick={()=>dispatch(fetchProgramTypes(programs))}>Select Program</button>
      <div>
        {theTypes.map((type,key)=><button key={key} onClick={()=>dispatch(fetchYouthEmpowerment(programs))}>{type}</button>)}
      </div>
      <div>
        {theCategories.map((category, key)=><button key={key}>{category}</button>)}
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
