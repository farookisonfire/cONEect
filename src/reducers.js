const { combineReducers } = require('redux')



const displayingCategories = (state = false, { type }) => {
  switch(type) {
    case 'DISPLAY_CATEGORIES':
      return true
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

const selectedProgramId = (state=0, { type, programId}) => {
  switch(type) {
    case 'PROGRAM_SELECTED':
      return programId
    default:
      return state
  }
}

const selectedDateId = (state = 0, { type, dateId }) => {
  switch(type) {
    case 'PROGRAM_SELECTED':
      return dateId
    default:
      return state
  }
}

const showModal = (state=false, { type, visibility }) => {
  switch(type) {
    case 'SHOW_MODAL':
      return visibility
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

const rootReducer = combineReducers({
  showModal,
  displayingCategories,
  selectedCategoryId,
  selectedProgramTypeId,
  selectedProgramId,
  selectedDateId,
  entities: combineReducers({
    programCategories,
    programTypes,
    programs
  })
})

module.exports = rootReducer
