import React from 'react';
import App from './app.jsx';
// import style from '../style/main.css';

class CastTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='table table-dark table-striped'>
              <div className='actorImage'>
                {this.props.actor.map((each) => (
                  <img src={each.image}/>
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
      </div>
    )
  }
}

export default CastTable;
