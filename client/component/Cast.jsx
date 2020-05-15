import React from 'react';
import CastTile from './CastTile.jsx';
import ActorModal from './ActorModal.jsx';

class Cast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      actorName: '',
      actorImage: '',
      charname: ''
    }

  }

  getModal(image, name, charname) {
    this.setState({
      show: true,
      actorImage: image,
      actorName: name,
      charname: charname
    }, () => {
    })
  }

  closeModal() {
    this.setState({show: false})
    console.log(this.state.show);
  }

  createTable() {
    return this.props.actor.map((each, i) => {
      return (
      <tr key={i}>
        <td className='image'><img className='actorImage' src={each.image} onClick={this.getModal.bind(this, each.image, each.name, each.charname)}/></td>
        <td className='actorName' onClick={this.getModal.bind(this, each.image, each.name, each.charname)}>{each.name}</td>
        <td className='dots'>...</td>
        <td className='characterName' onClick={this.getModal.bind(this, each.image, each.name, each.charname)}>{each.charname}</td>
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

        <table className='table table-striped table-border table-light table-responsive'>
          <tbody>
            {this.createTable()}
          {/* {this.props.actor.map((each) => 
            <CastTile each={each}/>
          ))} */}

          {/* {this.props.character.map((each) => (
            <CastTile eachCharacter={each}/>
          ))} */}
          </tbody>
        </table>
        </div>

        <div>
          <ActorModal actor={this.props.actor} actorDescription={this.props.actorDescription} 
          show={this.state.show} actorName={this.state.actorName} 
          actorImage={this.state.actorImage} closeModal={this.closeModal.bind(this)}/>
        </div>
      </div> 
    );
  }
}
}

export default Cast;

// //is this where the table goes or is it the castTile
//refactor to the tile way

//this works but this.props.character.name doesn't
// {this.props.character.map((each) => (
// <td>{each.name}</td>
// ))}
