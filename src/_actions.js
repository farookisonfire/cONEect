exports.displayCategories = () => {
  return { type: 'DISPLAY_CATEGORIES'}
}

// exports.displayTypes = () => {
//   return{ type: 'DISPLAY_TYPES'}
// }

exports.selectCategory = id => {
  return { type: 'SELECTED_CATEGORY', payload: id }
}

// exports.selectType = (id) => {
//   if (id === 1) {
//     return{ type: 'SELECTED_INTERNSHIP' }
//   } else if (id === 2) {
//     return{ type: 'SELECTED_VOLUNTEER' }}
// }

exports.selectType = (id) => {
  return { type: 'SELECTED_TYPE', payload: id }
}

exports.selectProgram = (programId, dateId) => {
  return { type: 'PROGRAM_SELECTED', programId, dateId }
}


exports.showTheModal = (visibility) => {
  return {type:'SHOW_MODAL', visibility}
}

exports.confirmProgram = () => {
  return {type:'PROGRAM_CONFIRMED'}
}
