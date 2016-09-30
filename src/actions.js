module.exports = {
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
