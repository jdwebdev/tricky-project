import data from '../data';

const initialState = {score: data.score, timer: data.timer};

const statistiquesReducer = (state = initialState, action) => {
    let newScore;

    switch(action.type) {
        case 'UPDATE_SCORE':
            newScore = state.score + action.payload;
            if (newScore < 0) newScore = 0;
            return {
                ...state,
                score: newScore
            };
        case 'UPDATE_TIMER':
            return {
                ...state,
                timer: state.timer + 1
            };
        default:
            return state;
    }
}

export default statistiquesReducer;