import React from 'react';
import App from './app.jsx';
import Cast from './Cast.jsx';

class CastTile extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log('here')
    // console.log(this.props.each.name);
    return (
      <div>
        <tr>
          <td>{this.props.each.image}</td>
          <td>{this.props.each.name}</td>
          {/* <td>{this.props.eachCharacter.name}</td> */}
        </tr>
      </div> 
    );
  }
}

export default CastTile;


