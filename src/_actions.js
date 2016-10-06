exports.displayCategories = () => {
  return { type: 'DISPLAY_CATEGORIES'}
}

exports.selectCategory = id => {
  if (id === 1) {
    return {type: 'SELECTED_YOUTH_EMPOWERMENT'}
  } else if (id === 2) {
    return {type: 'SELECTED_HEALTH_INNOVATION'}
  }
}

exports.selectType = (id) => {
  if (id === 1) {
    return{ type: 'SELECTED_INTERNSHIP' }
  } else if (id === 2) {
    return{ type: 'SELECTED_VOLUNTEER' }}
}

exports.selectProgram = (programId, dateId) => {
  return { type: 'PROGRAM_SELECTED', programId, dateId }
}


exports.showTheModal = (visibility) => {
  return {type:'SHOW_MODAL', visibility}
}
