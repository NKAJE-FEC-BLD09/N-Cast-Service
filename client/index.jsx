import React from 'react';
import ReactDOM from 'react-dom';
//components
//import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Creation Station</h2>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));