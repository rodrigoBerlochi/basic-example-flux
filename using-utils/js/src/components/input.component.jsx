'use strict';

import React, {PropTypes, defaultProps} from 'react';
import Label from './label.component.jsx';

class Input extends React.Component {

    constructor(props) {
        super(props); //make props available inside the constructor
    }
    
    _onKeyPress (e) {
        if (e.key === 'Enter') {
            var val = e.currentTarget.value;
            //console.log(val);
            //console.dir(this);
            e.currentTarget.value = '';
            this.props.onCreateNewItem(val);
        
        }
    }
    
    render() {
        let styling = 'Input ';
        if (this.someAttribute) {
            styling += 'completed ';
        }
        return ( 
                <div>
                    <Label mode={this.props.mode}>{this.props.label}</Label>
                    <input ref={this.props.referenceName} onKeyPress={this._onKeyPress.bind(this)} type="text" placeholder={this.props.placeholder} defaultValue="" name={this.props.name} className={styling}/>
                </div> 
                );
    }
    
};

Input.propTypes = {
    placeholder:  PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string
};
Input.defaultProps = {
    placeholder: "Please type your city name",
    name: "city"
};

//module.exports = Input;
export default Input;