const initialState = {
  selectedCategoryId: 0,
  displayingCategories: false,
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
        programTypeId: 1,
        programCategoryId: 1,
        location: 'South Africa',
        dates: ['May 22 - June 16','June 19 - July 14']
      },
      '2' : {
        id: 2,
        programTypeId: 1,
        programCategoryId: 1,
        location: 'Jamaica',
        dates: ['July 10 - August 4']
      },
      '3': {
        id: 3,
        programTypeId: 2,
        programCategoryId: 1,
        location: 'South Africa',
        dates: ['May 22 - June 16','June 19 - July 14']
      },
      '4': {
        id: 4,
        programTypeId: 2,
        programCategoryId: 1,
        location: 'Jamaica',
        dates: ['July 10 - August 4']
      },
      '5': {
        id: 5,
        programTypeId: 1,
        programCategoryId: 2,
        location: 'South Africa',
        dates: ['May 22 - June 16','June 19 - July 14']
      },
      '6': {
        id: 6,
        programTypeId: 2,
        programCategoryId: 2,
        location: 'South Africa',
        dates: ['July 10 - August 4']
      },
    },
  }
}

module.exports = initialState
