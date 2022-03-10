import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ProductReducer from './Reducer/ProductReducer'




const reducers=combineReducers({
      product:ProductReducer
      
})

const middleWare=[thunk]

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;