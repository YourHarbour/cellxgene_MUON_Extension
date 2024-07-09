/*
Reducer for the annoMatrix
*/

const AnnoMatrix = (state = null, action) => {
  if (action.annoMatrix) {
    // console.log(action)
    return action.annoMatrix;
  }
  return state;
};

export default AnnoMatrix;
