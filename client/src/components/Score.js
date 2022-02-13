import React from 'react';
import PropTypes from 'prop-types';

const Score = (props) => {

  return (
    <div>
        <p>Score : {props.score}</p>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default React.memo(Score);