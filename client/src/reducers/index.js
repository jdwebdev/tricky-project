import gameStateReducer from './gameState'
import statistiquesReducer from './statistiques'
import { combineReducers } from 'redux'

export default combineReducers({
    gameState: gameStateReducer,
    stats: statistiquesReducer
})