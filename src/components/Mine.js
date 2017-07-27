'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {mine} from '../images/mine.svg';

const Mine = ({id}) => {
    <img src={mine}
        name={`mine${id}`}
        key={id} />;
};

Mine.propTypes = {
    id: PropTypes.number.isRequired
};

export default Mine;