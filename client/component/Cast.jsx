import React from 'react';
import App from './app.jsx';
import style from '../dist/main.css';
import CastTile from './CastTile.jsx';

class Cast extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  createTable() {
    return this.props.actor.map((each, i) => {
      return (
      <tr key={i}>
        <td><img className='actorImage' src={each.image}/></td>
        <td>{each.name}</td>
        <td>...</td>
        <td>{each.charname}</td>
      </tr>
      )
    });
  }

  render () {
    if (this.props.actor.length === 0) {
      return (
        <div>
          <h6>loading....</h6>
        </div>
      )
    } else {
    return (
      <div>
        <table className='table table-striped'>
          {this.createTable()}
          {/* {this.props.actor.map((each) => 
            <CastTile each={each}/>
          ))} */}

          {/* {this.props.character.map((each) => (
            <CastTile eachCharacter={each}/>
          ))} */}
        </table>
      </div> 
    );
  }
}
}

export default Cast;

// //is this where the table goes or is it the castTile
//refactor 

// {this.props.character.map((each) => (
// <td>{each.name}</td>
// ))}
