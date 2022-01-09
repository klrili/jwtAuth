import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));