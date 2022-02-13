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

export const getGel = () => {
    return {
        type: 'GET_GEL',
    }
}

export const enterPharmacy = (tileId) => {
    return {
        type:'ENTER_PHARMACY',
        payload: tileId
    }
}

export const spreadVirus = (list) => {
    return {
        type:'SPREAD_VIRUS',
        payload: list
    }
}

export const emptyVirus = () => {
    return {
        type:'EMPTY_VIRUS'
    }
}

export const caughtVirus = (playerPos) => {
    return {
        type:'CAUGHT_VIRUS',
        payload: playerPos
    }
}