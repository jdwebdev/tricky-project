import { createStore } from 'redux'
import gameStateReducer from './reducers/gameState'

const store = createStore(
    gameStateReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;