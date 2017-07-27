'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({id}) => {
    <span
        className="empty"
        name={`empty${id}`}
        key={id}>
        &nbsp;
    </span>;
};

Empty.propTypes = {
    id: PropTypes.number.isRequired
};