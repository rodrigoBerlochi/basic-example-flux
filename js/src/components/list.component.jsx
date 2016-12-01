'use strict';

import React, {PropTypes, defaultProps} from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {
                this.props.list.map(function (currentVal, idx, arr) {
                    return <li key={currentVal}>{currentVal}</li>;
                })
                }
            </ul>
        );
    }
}

export default List;