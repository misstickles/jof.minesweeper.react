import React from 'react';
import PropTypes from 'prop-types';

/*
1 - 8
empty
*/

class Number extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    };

    render() {
        return (
            <span
                className={`number n${this.props.value}`}
                name={`number${this.props.value}`}>
                    {this.props.value}
            </span>
        );
    }
}

export default Number;