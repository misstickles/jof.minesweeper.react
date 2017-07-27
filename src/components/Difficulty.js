import React from 'react';
import PropTypes from 'prop-types';
import Levels from './Levels';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import options from '../constants/gameOptions';
import * as difficultyActions from '../actions/difficultyActions';

class Difficulty extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    changeLevel(levelAction) {
        this.props.actions.changeLevel(levelAction);
    }

    render() {
        const levels = Object.entries(options.levels).map((level) => {
            return <span 
                className="btn btn-warning" 
                onClick={() => this.changeLevel(level[1].action)}
                key={level[1].label}>
                {level[1].label}
            </span>;            
        });

        return (
            <div>
                {levels}
                <span>{this.props.difficulty.level.mines}</span>
            </div>
        );
    }
}

Difficulty.propTypes = {
    actions: PropTypes.object.isRequired,
    difficulty: PropTypes.shape({
        level: PropTypes.shape({
            mines: PropTypes.number.isRequired,
            rows: PropTypes.number.isRequired,
            cols: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        difficulty: {
            level: state.difficulty.level   
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(difficultyActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Difficulty);