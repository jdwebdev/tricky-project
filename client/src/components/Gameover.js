import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { nextStage } from '../actions/gameState';
import { resetStatistiques } from '../actions/statistiques';


const Gameover = (props) => {

    const result = useSelector(state => state.stats);
    const dispatch = useDispatch();

    const minutes = Math.floor(result.timer / 60);
    const seconds = result.timer - (minutes*60);

    const handleClick = () => {
        dispatch(resetStatistiques());
        dispatch(nextStage(0));
        props.retry();
    }

    return (
        <div className="gameoverContainer">
            <ul>
                <li><strong>Score total : {result.score}</strong></li>
                <li>Temps : {minutes} min. {seconds} sec.</li>
            </ul>
            <p><strong>Malus :</strong></p>
            <ul>
                <li>Gels oubliés : {result.gel} x -20 pts</li>
                <li>Personnes sans masque : {result.noMask} x -50 pts</li>
                <li>Virus attrapés : {result.virus} x -100 pts</li>
            </ul>
            <button 
                onClick={handleClick}
            >Rejouer</button>
        </div>
    )
}

Gameover.propTypes = {
    retry: PropTypes.func.isRequired
}

export default Gameover;