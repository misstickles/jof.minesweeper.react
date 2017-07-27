'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Unopened = ({id}) => {
    <span
        className="unopened"
        name={`unopened${id}`}
        key={id}>
        ?
    </span>;
};

Unopened.propTypes = {
    id: PropTypes.number.isRequired
};