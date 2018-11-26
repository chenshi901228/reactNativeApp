

import { createStore, applyMiddleware } from 'redux'

import Reducers from './reducer.js'


import thunk from 'redux-thunk'
import logger from 'redux-logger'


export default createStore(Reducers, applyMiddleware(thunk, logger))