'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {flag} from '../images/flag.svg';

const Flag = ({id}) => {
    return (
        <img src={flag}
            name={`flag${id}`}
            key={id} />
    );
};

Flag.propTypes = {
    id: PropTypes.number.isRequired
};

export default Flag;