const { combineReducers } = require('redux')

const selectedProgramTypeId = (state=0, { type }) => {
  switch(type) {
    case 'SELECTED_INTERNSHIP':
      return 1
    case 'SELECTED_VOLUNTEER':
      return 2
    default:
      return state
  }
}

const selectedCategoryId = (state=0, { type }) => {
  switch(type) {
    case 'SELECTED_YOUTH_EMPOWERMENT':
      return 1
    case 'SELECTED_HEALTH_INNOVATION':
      return 2
    default:
      return state
  }
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
  selectedProgramTypeId,
  selectedCategoryId,
  displayingCategories,
  entities: combineReducers({
    programCategories,
    programTypes,
    programs
  })
})

module.exports = rootReducer
