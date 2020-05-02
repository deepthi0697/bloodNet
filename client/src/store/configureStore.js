import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import banksReducer from '../reducer/bankReducer'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            banks: banksReducer
            
        }), applyMiddleware(thunk)
    )

    return store
}

export default configureStore