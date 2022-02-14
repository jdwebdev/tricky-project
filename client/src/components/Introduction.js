import React from 'react';
import { useState } from 'react';
import data from '../data';
import PropTypes from 'prop-types';


const Introduction = (props) => {
    
    const phraseList = data.introText;
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [end, setEnd] = useState(false);

    const handleClick = () => {
        const current = currentPhrase + 1;
        if (current === phraseList.length -1) {
            setEnd(true);
        }
        setCurrentPhrase(current);
    }

    return (
        <div>
            <div className="introductionContainer">
                <p>{phraseList[currentPhrase]}</p>
            </div>
            {end === false &&             
                <button 
                    className="nextButton"
                    onClick={handleClick}
                >Suivant ►</button>
            }
            {end &&
                <div className="startBtnContainer"> 
                    <button className="startBtn" onClick={props.onClick}>Commencer</button>
                </div>
            }
        </div>
    )
}


Introduction.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Introduction;