import { Types } from './Types';

const INITIAL_STATE = {
  formData: {
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
    min_x: undefined,
    max_x: undefined,
    min_y: undefined,
    max_y: undefined,
    min_z: undefined,
    max_z: undefined,
  },
  step: 1,
  showResult: false,
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case Types.SET_SHOW_RESULT:
      return {
        ...state,
        showResult: action.payload,
      };
    case Types.SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
