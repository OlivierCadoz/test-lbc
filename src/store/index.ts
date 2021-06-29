import { createStore, applyMiddleware, compose } from 'redux';
import { requestMiddleware } from './middlewares/request.middleware';
import { rootReducer } from './reducers/root.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(requestMiddleware);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));
