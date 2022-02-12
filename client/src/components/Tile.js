import React from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {

  return (
    <div className="tile">
        <p>{props.id} {props.type}</p>
        <img src={props.imgSrc}/>
        <div className="tile_hover"></div>
    </div>
  );
}

Tile.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Tile;
