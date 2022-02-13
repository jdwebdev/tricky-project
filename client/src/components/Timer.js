import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTimer } from '../actions/statistiques';
import PropTypes from 'prop-types';

let interval;

const Timer = (props) => {

    const count = useSelector(state => state.stats.timer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.stopTimer) {
            clearInterval(interval);
        } else {
            interval = setInterval(() => {
                dispatch(updateTimer());
            }, 1000)
        }
    }, [props.stopTimer]);
    
  return (
    <div>Timer : {count}</div>
  )
}

Timer.propTypes = {
    stopTimer: PropTypes.bool.isRequired
}

export default React.memo(Timer);