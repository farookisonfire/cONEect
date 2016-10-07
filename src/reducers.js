const { combineReducers } = require('redux')



const displayingCategories = (state = false, { type }) => {
  switch(type) {
    case 'DISPLAY_CATEGORIES':
      return true
    case 'PROGRAM_CONFIRMED':
      return false
    default:
      return state
  }
}

const displayingTypes = (state=false,{type}) => {
  switch(type){
    case 'SELECTED_CATEGORY':
      return true
    case 'PROGRAM_CONFIRMED':
      return false
    default:
      return state
  }
}

const displayingPrograms = (state = false, { type }) => {
  switch(type) {
    case 'SELECTED_TYPE':
      return true
    case 'PROGRAM_CONFIRMED':
      return false
    default:
      return state
  }
}

const displayingConfirmButton = (state = false, { type }) => {
  switch(type){
    case 'PROGRAM_SELECTED':
      return true
    case 'PROGRAM_CONFIRMED':
      return false
    default:
      return state
  }
}

const selectedCategoryId = (state=0, { type, payload }) => {
  switch(type) {
    case 'SELECTED_CATEGORY':
      return payload
    default:
      return state
  }
}

const selectedProgramTypeId = (state=0, { type, payload }) => {
  switch(type) {
    case 'SELECTED_TYPE':
      return payload
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

const programConfirmed = (state=false, {type}) => {
  switch(type) {
    case 'PROGRAM_CONFIRMED':
      return true
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

  displayingCategories,
  displayingTypes,
  displayingPrograms,
  displayingConfirmButton,
  selectedCategoryId,
  selectedProgramTypeId,
  selectedProgramId,
  selectedDateId,
  showModal,
  programConfirmed,
  entities: combineReducers({
    programCategories,
    programTypes,
    programs
  })
})

module.exports = rootReducer
