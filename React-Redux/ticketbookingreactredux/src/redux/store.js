import {createStore} from 'redux'
import railwayStore from './reducer'

const store = createStore(railwayStore,{},
    window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;    