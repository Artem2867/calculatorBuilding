import {applyMiddleware, combineReducers, createStore} from 'redux'
import ThunkMiddleWare from 'redux-thunk';
import calculatorReducer from './reducers/calculatorReducer';
import materialReducer from './reducers/materialReducer';


const reducers = combineReducers({
    calculator: calculatorReducer,
    material: materialReducer
}) 



const store = createStore(reducers, applyMiddleware(ThunkMiddleWare));


export default store;