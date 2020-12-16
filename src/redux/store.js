import { createStore, compose } from 'redux';

import mainReducer from './Reducer';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(mainReducer, enhancers);

export default store;
