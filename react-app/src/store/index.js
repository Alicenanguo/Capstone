import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session.js'
import productReducer from './product';
import categoryReducer from './category.js';
import reviewsReducer from './review.js';
import cartReducer from './cart.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  categories: categoryReducer,
  reviews: reviewsReducer,
  carts:cartReducer,

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
