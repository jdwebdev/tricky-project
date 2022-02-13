export const nextStage = (nb = 0) => {
    return {
        type: 'NEXT_STAGE',
        payload: nb
    }
}

export const movePlayer = (tileId) => {
    return {
        type:'MOVE_PLAYER',
        payload: tileId
    }
}

export const giveMask = (tileId) => {
    return {
        type:'GIVE_MASK',
        payload: tileId
    }
}