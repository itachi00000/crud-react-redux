import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super(); // access 'all' components
    console.log('constructor()');
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps);
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render()');
    return (
      <div>
        <h3>Life cycles</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
