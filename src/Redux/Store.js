import logger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'
const Store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default Store;