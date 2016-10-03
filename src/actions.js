module.exports = {
  fetchPrograms(programs) {
  programs.programsVisible = true;
    return{
      type: 'FETCH_PROGRAMS',
      payload: programs
    }
  },
  fetchUser() {
    return {
      type: 'FETCH_USER_FULFILLED',
      payload: {
        name: 'Kafka Tamura',
        age: 29,
      }
    }
  },
  fetchProgramTypes(programs){
    programs.types.forEach((type)=>type.typeVisible = true)
    return{
      type: 'FETCH_PROGRAM_TYPES',
      payload: programs
    }
  },
  fetchYouthEmpowerment(programs){
    programs.types.forEach((type)=>{
      if(type.type === 'Youth Empowerment'){
        type.categories.forEach((category)=>category.categoryVisible = true)
      }
    })
    return{
      type: 'FETCH_YOUTH_EMPOWERMENT',
      payload: programs
    }
  }
}
