import data from '../data';

const initialState = data.stage[0];

const gameStateReducer = (state = initialState, action) => {
    let noMaskList;
    let maskList;
    let noMaskIndex;

    switch(action.type) {
        case 'NEXT_STAGE':
            return {
                ...state,
                number: data.stage[action.payload].number,
                playerPos: data.stage[action.payload].playerPos,
                noMask: data.stage[action.payload].noMask,
                pharmacie: data.stage[action.payload].number,
                gel: data.stage[action.payload].gel
            };
        case 'MOVE_PLAYER':
            return {
                ...state, 
                playerPos: action.payload
            }
        case 'GIVE_MASK':
            noMaskList = [...state.noMask];
            maskList = [...state.mask];
            noMaskIndex = noMaskList.indexOf(action.payload);
            if (noMaskIndex !== -1) noMaskList.splice(noMaskIndex, 1);
            maskList.push(action.payload);
            return {
                ...state,
                noMask: [...noMaskList],
                mask: [...maskList]
            }
        default:
            return state;
    }
}

export default gameStateReducer;