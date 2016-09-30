module.exports = {
  fetchProgramTypes() {
    return{
      type: 'FETCH_PROGRAM_TYPES'
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
  }
}
