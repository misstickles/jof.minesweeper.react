// import React from 'react';
// import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as difficultyActions from '../actions/difficultyActions';

// class Levels extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//     }

//     updateLevel(levelLabel) {
//         this.props.actions.changeLevel(levelLabel);
//     }

//     render() {
//         let levels = this.props.levels.map((level) => {
//             return (
//                 <span 
//                     className="btn btn-warning" 
//                     onClick={this.changeLevel}
//                     key={level.label}>
//                     {level.label}
//                 </span>
//             );
//         });

//         return (
//             {levels}
//         );
//     }
// }

// Levels.propTypes = {
//     actions: PropTypes.object.isRequired,
//     levels: PropTypes.object.isRequired
// };

// function mapStateToProps(state, ownProps) {
//     return {
//         difficulty: {
//             level: state.difficulty.level   
//         }
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(difficultyActions, dispatch)
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Levels);