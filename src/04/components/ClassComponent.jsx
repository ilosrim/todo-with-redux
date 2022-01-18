import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 1,
    };
  }

  render() {
    return (
      <>
        <Welcome name="Toshmat" />
      </>
    );
  }
}


export default ClassComponent;
