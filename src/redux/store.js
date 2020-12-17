import { createStore, compose } from 'redux';

import mainReducer from './Reducer';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(mainReducer, enhancers);

export default store;

// this application is pretty small that I didn't have to use any kind of middleware
// if you want to see how I handle bigger projects with middlewares, please visit the following link
// https://github.com/shamimfahad/react-ecommerce/tree/master/client/src/redux
