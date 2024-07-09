/*
Reducer for the annoMatrix
*/

const AnnoMatrixAlter = (state = null, action) => {
  if (action.annoMatrixAlter) {
    console.log(action)
    return action.annoMatrixAlter;
  }
  return state;
};

export default AnnoMatrixAlter;
