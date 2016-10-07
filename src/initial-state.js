const initialState = {
  displayingCategories: false,
  displayingTypes:false,
  displayingPrograms: false,
  displayingConfirmButton: false,
  selectedCategoryId: 0,
  selectedProgramTypeId: 0,
  selectedProgramId: 0,
  selectedDateId: 0,
  showModal: false,
  programConfirmed: false,
  entities: {
    programCategories: {
      '1': {
        id: 1,
        name: 'Youth Empowerment'
      },
      '2': {
        id: 2,
        name: 'Health Innovation'
      }
    },
    programTypes: {
      '1': {
        id: 1,
        name: 'Internship'
      },
      '2': {
        id: 2,
        name: 'Volunteer'
      }
    },
    programs: {
      '1': {
        id: 1,
        programCategoryId: 1,
        programTypeId: 1,
        location: 'South Africa',
        dates: ['May 22 - June 16','June 19 - July 14','July 17 - August 11', 'July 31 - August 25']
      },
      '2' : {
        id: 2,
        programCategoryId: 1,
        programTypeId: 1,
        location: 'Jamaica',
        dates: ['July 10 - August 4']
      },
      '3': {
        id: 3,
        programCategoryId: 1,
        programTypeId: 2,
        location: 'South Africa',
        dates: ['May 22 - June 2','June 5 - June 16', 'June 19 - June 30', 'July 3 - July 14', 'July 17 - July 28', 'July 31 - August 11', 'August 14 - August 25']
      },
      '4': {
        id: 4,
        programCategoryId: 1,
        programTypeId: 2,
        location: 'Jamaica',
        dates: ['July 10 - July 21', 'July 24 - Augusst 4', 'July 10 - July 15', 'July 24 - August 4']
      },
      '5': {
        id: 5,
        programCategoryId: 2,
        programTypeId: 1,
        location: 'South Africa',
        dates: ['June 5 - June 30', 'July 3 - July 28', 'July 31 - August 25']
      },
      '6': {
        id: 6,
        programCategoryId: 2,
        programTypeId: 2,
        location: 'South Africa',
        dates: ['May 22 - June 2','June 5 - June 16', 'June 19 - June 30', 'July 3 - July 14', 'July 17 - July 28', 'July 31 - August 11', 'August 14 - August 25']
      },
    },
  }
}

module.exports = initialState
