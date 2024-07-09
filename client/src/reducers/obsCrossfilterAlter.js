/*
Reducer for the obsCrossfilter
*/

const ObsCrossfilterAlter = (state = null, action) => {
  if (action.obsCrossfilterAlter) {
    return action.obsCrossfilterAlter;
  }
  return state;
};

export default ObsCrossfilterAlter;
