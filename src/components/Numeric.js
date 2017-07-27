'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Numeric = ({id, number}) => {
    <span
        className={`number n${number}`}
        name={`number${id}`}
        key={id}>
        {number}
    </span>;
};

Numeric.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
};