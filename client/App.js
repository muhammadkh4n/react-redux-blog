import React, { PureComponent } from 'react';

import './app.less';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // do stuff on mount
  }

  render() {
    return (
      <div>Hello react, Awesome</div>
    );
  }
}
export default App;