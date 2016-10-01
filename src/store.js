const { createStore } = require('redux')

const defaultStore = {
  programs: {
    programsVisible: false,
    types: [
      {
        typeVisible:false,
        type: 'Youth Empowerment',
        categories: [
          {
            categoryVisible: false,
            category:'Global Intership',
            locations: [
              {
                locationVisible: false,
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
  const count = state.count || 0;
  switch(action.type) {
    case 'FETCH_USER_FULFILLED': return Object.assign({}, state, {name:action.payload.name, count:count+1})
    case 'FETCH_PROGRAMS': return Object.assign({},state,{programs:action.payload,count:count+1})
    case 'FETCH_PROGRAM_TYPES': return Object.assign({},state,{programs:action.payload,count:count+1})
    default: return state
  }
}

const store = createStore(reducer,window.devToolsExtension && window.devToolsExtension());

module.exports = store
