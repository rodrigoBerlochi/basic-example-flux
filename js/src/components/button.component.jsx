'use strict';

import React, {PropTypes, defaultProps} from 'react';

class Button extends React.Component {
    render() {
        return <input type="button" onClick={this.props.onNewItem} value={this.props.text} />;
    }
};

export default Button;
