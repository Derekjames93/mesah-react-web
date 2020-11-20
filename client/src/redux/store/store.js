import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import profile from '../action/profile'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user: profile
})

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
}



export default configureStore;