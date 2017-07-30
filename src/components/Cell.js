'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Flag from './Flag';
import Mine from './Mine';
import Numeric from './Numeric';
import Unknown from './Unknown';
import Unopened from './Unopened';
import Empty from './Empty';

const Cell = props => {
    let content = <Numeric number={0} id={5} />;

 //   if (props.data.isOpened) {
        if (props.data.isMine) content = <Mine id={2} />;
        else if (props.data.value > 0) content = <Numeric number={props.data.value} id={4} />;
        else if (props.data.value == 0) content = <Empty id={7} />;
    // }
    // else {
        else if (props.data.isFlag) content = <Flag id={3} />;
        else if (props.data.isUnknown) content = <Unknown id={6} />;
    //     else content = <Unopened id={7} />;
    // }

    return <span>{content}</span>;
};

Cell.propTypes = {
    data: PropTypes.shape({
        isMine: PropTypes.bool.isRequired,
        isFlag: PropTypes.bool.isRequired,
        isUnknown: PropTypes.bool.isRequired,
        isOpened: PropTypes.bool.isRequired,
        value: PropTypes.number.isRequired
    }).isRequired
};

export default Cell;