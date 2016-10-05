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
