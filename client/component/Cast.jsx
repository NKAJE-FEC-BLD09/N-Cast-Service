import React from 'react';
import App from './app.jsx';
import style from '../dist/main.css';
import CastTile from './CastTile.jsx';

class Cast extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.actor.map((each) => (
          <CastTile each={each}/>
        ))}
                  
        {this.props.character.map((each) => (
          <CastTile eachCharacter={each}/>
        ))}
      </div>
    );
  }
}


export default Cast;

// //is this where the table goes or is it the castTile