'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Unopened = ({id}) => {
    return (
        <span
            className="unopened"
            name={`unopened${id}`}
            key={id}>&nbsp;
        </span>
    );
};

Unopened.propTypes = {
    id: PropTypes.number.isRequired
};

export default Unopened;