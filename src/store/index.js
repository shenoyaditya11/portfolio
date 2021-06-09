import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

export default ()=> {
    const store = createStore(postReducer, applyMiddleware(thunk));

    return store
}