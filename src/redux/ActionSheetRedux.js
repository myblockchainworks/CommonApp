export const types = {
  EXPEND_ACTION_SHEET: 'EXPEND_ACTION_SHEET',
  CLOSE_ACTION_SHEET: 'CLOSE_ACTION_SHEET',
}

export const actionCreators = {
  expend: () => {
    return {type: types.EXPEND_ACTION_SHEET}
  },
  close: () => {
    return {type: types.CLOSE_ACTION_SHEET}
  }
}

let initialState = {
  actionSheetOpen : false,
  headerFlex : 1.5,
  contentFlex : 7.3,
  footerFlex : 1.2
};

export const reducer = (state = initialState, action) => {
  const {type } = action

  switch (type) {
    case types.EXPEND_ACTION_SHEET: {
      return {
        actionSheetOpen : true,
        headerFlex : 1.5,
        contentFlex : 4.3,
        footerFlex : 4.2,
        actionIcon : '../../images/close.png'
      }
    }
    case types.CLOSE_ACTION_SHEET: {
      return {
        actionSheetOpen : false,
        headerFlex : 1.5,
        contentFlex : 7.3,
        footerFlex : 1.2,
        actionIcon : '../../images/add.png'
      }
    }
  }

  return state;
}
