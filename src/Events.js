import React, { Component } from 'react';

class Events extends Component {
  constructor() {
    super();
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'SwitchedOn' : 'SwitchedOff'}
      </button>
    );
  }
}

export default Events;
