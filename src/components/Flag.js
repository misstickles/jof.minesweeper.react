import React from 'react';
import Img from '../img/flag.svg';

class Flag extends React.Component {
    render() {
        let content = <img src={Img}
                alt=''
                name='flag' />;

        if (this.props.value === 'q') {
            content = <span className='number'
                name='q'>?</span>;
        }

        return (
            content
        );
    }
}

export default Flag;