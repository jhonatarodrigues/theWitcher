import React, {Component} from 'react'

class campo extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {addClass: false, value: ''}
    }

    toggleBlur() {
        if(this.state.value.length > 0)
            this.setState({addClass: true});
        else 
            this.setState({addClass: false});
    }
    toggle() {
        this.setState({addClass: true});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.toggle();
    }

    render() {
      let boxClass = ["inputText"];
      if(this.state.addClass) {
        boxClass.push('activeLabel');
      }
      return(
            <div className={boxClass.join(' ')}>
                <label htmlFor={this.props.name}>
                    {this.props.legenda}
                </label>
                <input 
                    type            = {this.props.type ? this.props.type : 'text' } 
                    placeholder     = {this.props.placeholder ? this.props.placeholder : null} 
                    name            = {this.props.name ? this.props.value : null}
        
                    onBlur  = { this.toggleBlur.bind(this) } 
                    onFocus = { this.toggle.bind(this) }
                    onClick = { this.toggle.bind(this) }

                    value={this.state.value} 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


export default campo