'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as timerActions from '../actions/timerActions';

class Timer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.timerRunning !== this.props.timerRunning) {
            this.props.timerRunning ? this.stop() : this.start();
        }
    }

    componentWillUnmount() {
        this.stop();
    }

    start() {
        this.props.actions.timerStart();
    }

    stop() {
        this.props.actions.timerStop();
    }

    onClick(e) {
        this.props.timer.isRunning ? this.stop() : this.start();
    }

    format(time) {
        const pad = (time, length) => {
            while(time.length < length) {
                time = '0' + time;
            }
            return time;
        };

        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);
        let ms = pad(Math.round(time.getMilliseconds() / 100).toString(), 1);
        return `${m}:${s}.${ms}`;
    }

    render() {
        return (
            <div className="timer">{this.format(this.props.timer.time)}</div>
        );
    }
}

Timer.propTypes = {
    actions: PropTypes.object.isRequired,
    timer: PropTypes.shape({
        isRunning: PropTypes.bool.isRequired,
        time: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
    }).isRequired,
    timerRunning: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        timer: {
            isRunning: state.timer.isRunning,
            time: state.timer.time,
            offset: state.timer.offset
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timerActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);