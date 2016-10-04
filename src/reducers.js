const { combineReducers } = require('redux')

const selectedCategoryId = (state=0) => {
  return state
}

const programCategories = (state = {}) => {
  return state
}

const programTypes = (state = {}) => {
  return state
}

const programs = (state = {}) => {
  return state
}

const displayingCategories = (state = false, { type }) => {
  switch(type) {
    case 'DISPLAY_CATEGORIES':
      return true
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedCategoryId,
  displayingCategories,
  entities: combineReducers({
    programCategories,
    programTypes,
    programs
  })
})

module.exports = rootReducer
