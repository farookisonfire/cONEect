module.exports = {
  fetchPrograms(){
    return{
    type: 'FETCH_PROGRAMS',
    payload: {
      programs: ['CAPE TOWN 1', 'CAPE TOWN 2', 'CAPE TOWN 3']
      }
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
