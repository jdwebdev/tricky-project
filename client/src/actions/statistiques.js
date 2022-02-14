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

export const incrementGelStats = () => {
    return {
        type: 'INCREMENT_GEL_STATS'
    }
}

export const updateNoMaskStats = (stats) => {
    return {
        type: 'UPDATE_NO_MASK_STATS',
        payload: stats
    }
}

export const incrementVirusStats = () => {
    return {
        type: 'INCREMENT_VIRUS_STATS'
    }
}

export const resetStatistiques = () => {
    return {
        type: 'RESET_STATS'
    }
}