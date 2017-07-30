'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Unknown = ({id}) => {
    return (
        <span
            className="unknown"
            name={`unknown${id}`}
            key={id}>
            ?
        </span>
    );
};

Unknown.propTypes = {
    id: PropTypes.number.isRequired
};

export default Unknown;