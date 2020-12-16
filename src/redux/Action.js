import { Types } from './Types';

export const setCurrentStep = (step) => ({
  type: Types.SET_STEP,
  payload: step,
});

export const setFormData = (data) => ({
  type: Types.SET_FORM_DATA,
  payload: data,
});

export const clearFormData = () => ({
  type: Types.CLEAR_FORM_DATA,
});

export const setShowResult = (val) => ({
  type: Types.SET_SHOW_RESULT,
  payload: val,
});

export const setChartData = (data) => ({
  type: Types.SET_CHART_DATA,
  payload: data,
});
