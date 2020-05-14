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
        <td className='image'><img className='actorImage' src={each.image}/></td>
        <td className='actorName'>{each.name}</td>
        <td className='dots'>...</td>
        <td className='characterName'>{each.charname}</td>
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
      <div className ='app'>
        <div className='container'>
        <h3 className='cast'>Cast</h3>
        <p className='words'>Cast overview, first billed only:</p>
        <table className='table table-striped table-border table-dark' >
          {this.createTable()}
          {/* {this.props.actor.map((each) => 
            <CastTile each={each}/>
          ))} */}

          {/* {this.props.character.map((each) => (
            <CastTile eachCharacter={each}/>
          ))} */}
        </table>
        </div>
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
