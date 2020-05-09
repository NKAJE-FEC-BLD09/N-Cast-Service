import React from 'react';
import App from './app.jsx';

class CastTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.movie}</p>
      </div>
    )
  }
}

export default CastTable;
