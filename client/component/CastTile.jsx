import React from 'react';
import App from './app.jsx';
import Cast from './Cast.jsx';

class CastTile extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  render () {
    return (
      <div>
      {/* <table>
        <tr>
          <td>{this.props.each.image}</td>
          <td>{this.props.each.name}</td>
          <td>{this.props.eachCharacter.name}</td>
        </tr>
      </table> */}
      </div> 
    );
  }
}

export default CastTile;


