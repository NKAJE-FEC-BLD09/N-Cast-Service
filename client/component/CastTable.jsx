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

      <div className='actorImage'>
        {this.props.actor.map((each) => (
          <p>{each.image}</p>
        ))}
      </div>

<br></br>

      <div className='actor'>
        {this.props.actor.map((each) => (
          <p>{each.name}</p>
        ))}
      </div>

<br></br>

      <div className='character'>
        {this.props.character.map((each) => (
          <p>{each.name}</p>
        ))}
      </div>
      </div>
    )
  }
}

export default CastTable;
