/*
we have a UI heuristic to pick the default layout, based on assumptions
about commonly used names.  Preferentially, pick in the following order:

  1. "umap"
  2. "tsne"
  3. "pca"
  4. give up, use the first available
*/
function bestDefaultLayout(layouts) {
  const preferredNames = ["umap", "tsne", "pca"];
  const idx = preferredNames.findIndex((name) => layouts.indexOf(name) !== -1);
  if (idx !== -1) return preferredNames[idx];
  return layouts[0];
}

function setToDefaultLayout(schema) {
  const available = schema.layout.obs.map((v) => v.name).sort();
  const current = bestDefaultLayout(available);
  const currentDimNames = schema.layout.obsByName[current].dims;
  return { available, current, currentDimNames };
}

const LayoutChoiceAlter = (
  state = {
    available: [], // all available choices
    current: undefined, // name of the current layout, eg, 'umap'
    currentDimNames: [], // dimension name
  },
  action,
  nextSharedState
) => {
  // console.log(action);
  switch (action.type) {
    case "initial data load complete": {
      // set default to default
      const { annoMatrixAlter } = nextSharedState;
      console.log('init load');
      return {
        ...state,
        ...setToDefaultLayout(annoMatrixAlter.schema),
      };
    }

    case "set layout multi": {
      console.log(action)
      console.log(nextSharedState)
      const { schema } = nextSharedState.annoMatrixAlter;
      const current = action.layoutChoiceAlter;
      console.log(current)
      const currentDimNames = schema.layout.obsByName[current].dims;
      return { ...state, current, currentDimNames };
    }

    default: {
      return state;
    }
  }
};

export default LayoutChoiceAlter;
