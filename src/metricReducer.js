const initialState = {
  time: 0,
  latitude: 0,
  longitude: 0,
  temperature: 0
};

function metricReducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case "UPDATE_FORM_FIELD":
      state = {
        ...state,
        [action.payload.fieldName]: action.payload.fieldValue
      };
      break;
  }
  return state;
}
export default metricReducer;
