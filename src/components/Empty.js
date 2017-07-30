'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({id}) => {
    return (<span
        className="empty"
        name={`empty${id}`}
        key={id}>
        &nbsp;
    </span>);
};

Empty.propTypes = {
    id: PropTypes.number.isRequired
};

export default Empty;