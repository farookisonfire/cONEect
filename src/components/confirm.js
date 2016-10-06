const React = require('react')
const Modal = require('react-bootstrap/lib/Modal')
const Button = require('react-bootstrap/lib/Button')
const { showTheModal } = require('../_actions')
const { connect } = require('react-redux')

const Confirm = ({ selectedProgramCategoryName, selectedProgramTypeName, selectedProgramDates, showModal, dispatch }) => {
  return(
    <div>
      <Button
        bsStyle='success'
        bsSize='large'
        onClick={() => dispatch(showTheModal(true))}
      >
        Continue
      </Button>
      <Modal
        show={showModal}
        onHide={close}
        bsSize='small'
      >
        <Modal.Header>
          <Modal.Title>Confirm Your Program Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <span>{ selectedProgramCategoryName }</span>
            <span> | </span>
            <span>{ selectedProgramTypeName }</span>
          </div>
          <div>{ selectedProgramDates }</div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='warning' onClick={() => dispatch(showTheModal(false))}>Cancel</Button>
          <Button
            bsStyle ='success'
            onClick={() => dispatch(showTheModal(false))}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const mapStateToProps = ({ showModal, selectedCategoryId, selectedProgramTypeId, selectedProgramId, selectedDateId, entities:{ programCategories, programTypes, programs } }) => {
  const selectedProgramCategoryName = Object
    .keys(programCategories)
    .map(key => programCategories[key])
    .filter(category => category.id === selectedCategoryId)[0].name

  const selectedProgramTypeName = Object
    .keys(programTypes)
    .map(key => programTypes[key])
    .filter(type => type.id === selectedProgramTypeId)[0].name

  const selectedProgramDates = Object
    .keys(programs)
    .map(key => programs[key])
    .filter(program => program.id === selectedProgramId)[0]
    .dates[selectedDateId]


  return {
    showModal,
    selectedProgramCategoryName,
    selectedProgramTypeName,
    selectedProgramDates
  }
}

module.exports = connect(mapStateToProps)(Confirm)
