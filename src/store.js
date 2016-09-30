const { createStore } = require('redux')

const defaultStore = {
  count: 0,
  programs: {
    programsVisibile: false,
    types: [
      {
        typeVisibile:false,
        type: 'Youth Empowerment',
        categories: [
          {
            categoryVisibile: false,
            category:'Global Intership',
            locations: [
              {
                locationVisibile: false,
                location: 'South Africa',
                dates: [
                  'May 22 - June 16',
                  'June 19 - July 14'
                ]
              },
              {
                locationVisible: false,
                location: 'Jamaica',
                dates: [
                  'July 10 - August 4'
                ]
              }]
          },
          {
            categoryVisible: false,
            category:'Volunteer Program'
          }
          ]
      }
    ]
  }
} // end of defaultStore

const reducer= (state=defaultStore,action) => {
  switch(action.type) {
    case 'FETCH_USER_FULFILLED': return Object.assign({}, state, {name:action.payload.name})
    case 'FETCH_PROGRAM_TYPES':{
      let test = Object.assign({},state.programs,{programsVisibile:true})
      return Object.assign({},state,{programs:test})
  }


    default: return state
  }
}

const store = createStore(reducer);

module.exports = store
