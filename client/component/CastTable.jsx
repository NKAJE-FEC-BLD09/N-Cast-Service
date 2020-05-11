import React from 'react';
import App from './app.jsx';

class CastTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <p>{this.props.movie}</p>
        <p>{this.props.actor.map((each) => {
            return each.name
        })}</p>
      </div>
    )
  }
}

export default CastTable;
