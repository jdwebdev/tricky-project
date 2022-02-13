export const updateScore = (nb = 0) => {
    return {
        type: 'UPDATE_SCORE',
        payload: nb
    }
}

export const updateTimer = () => {
    return {
        type: 'UPDATE_TIMER'
    }
}