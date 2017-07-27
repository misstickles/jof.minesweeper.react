'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({container, onLeftClick, onRightClick}) => {
    {container;}
    // if (type.image !== null) {
    //     <img src={type.image} name={type.name} />
    // } else {
    //     <span
    //         onClick={onLeftClick}
    //         onContextMenu={onRightClick}
    //         name={type.name}>
    //         {type.text}
    //     </span>
    // }

    alert({container});
};

Cell.propTypes = {
    container: PropTypes.element.isRequired
};

export default Cell;