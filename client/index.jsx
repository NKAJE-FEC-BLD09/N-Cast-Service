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
        Creation Station
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));