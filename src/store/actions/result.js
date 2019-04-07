import * as actionTypes from './actionTypes'

export const saveResult = result => {
  //const updatedResult = result * 2
  return {
    type: actionTypes.STORE_RESULT,
    result
  }
}

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      //const olcCounter = getState().ctr.counter
      //console.log(olcCounter)
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const deleteResult = (resultElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId
  }
}
