import React from 'react';
import Flag from './Flag';
import Mine from './Mine';
import Number from './Number';
import New from './New';

class Cell extends React.Component { //} = (props, state) => {
    constructor(props) {
        super(props);

        this.state = {
            cellContent: <New />
        }
    }

    render() {
        let self = this;

        let selectCell = (e) => {
            let content = '';
            
            switch(self.props.status) {
                case 'mine':
                    content = <Mine />;
                    break;
                case 'flag':
                    content = <Flag value='' />;
                    break;
                default:
                    content = <Number value={self.props.value} />;
                    break;
            }
    
            this.setState({
                cellContent: content
            });
        };

        let rightClick = (e) => {
            e.preventDefault();

            let content = '';

            switch (e.target.name) {
                case 'flag':
                    content = <Flag value='q' />
                    break;
                case '?':
                    content = <New />;
                    break;
                case 'mine':
                    content = <Mine />;
                    break;
                default:
                    content = <Flag value='' />;
            }

            this.setState({
                cellContent: content
            });
        };

        return (
            <span
                onClick={(e) => selectCell(e)}
                onContextMenu={(e) => rightClick(e)}
            >{this.state.cellContent}</span>
        );
    }
}

export default Cell;