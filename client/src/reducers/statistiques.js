// import data from '../data';

const initialState = {
    score: 0, 
    timer: 0, 
    gel: 0, 
    noMask: 0, 
    virus: 0
};

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
        case 'INCREMENT_GEL_STATS':
            return {
                ...state,
                gel: state.gel + 1
            }
        case 'UPDATE_NO_MASK_STATS':
            return {
                ...state,
                noMask: state.noMask + action.payload
            }
        case 'INCREMENT_VIRUS_STATS':
            return {
                ...state,
                virus: state.virus + 1
            }
        case 'RESET_STATS':
            return {
                ...state, 
                score: 0,
                timer: 0,
                gel: 0,
                noMask: 0,
                virus: 0
            }
        default:
            return state;
    }
}

export default statistiquesReducer;