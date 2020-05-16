import React from 'react';
import CastTile from './CastTile.jsx';
import ActorModal from './ActorModal.jsx';
import CharacterModal from './CharacterModal.jsx';

class Cast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      showChar: false,
      actorName: '',
      actorImage: '',
      charname: '',
    }
    this.getModal = this.getModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getModalChar(image, name, charname) {
    this.setState({
      showChar: true,
      actorImage: image,
      actorName: name,
      charname: charname
    })
  }

  getModal(image, name, charname) {
    this.setState({
      show: true,
      actorImage: image,
      actorName: name,
      charname: charname
    })
  }

  closeModal() {
    this.setState({
      show: false,
      showChar: false
    })
  }

  createTable() {
    return this.props.actor.map((each, i) => {
      return (
      <tr key={i}>
        <td className='nimage'><img className='nactorImage' src={each.image} onClick={ (e) => {e.preventDefault(); this.getModal(each.image, each.name, each.charname)}}/></td>
        <td className='nactorName' onClick={(e) => {e.preventDefault(); this.getModal(each.image, each.name, each.charname)}}>{each.name}</td>
        <td className='ndots'>...</td>
        <td className='ncharacterName' onClick={(e) => {e.preventDefault(); this.getModalChar(each.image, each.name, each.charname)}}>{each.charname}</td>
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

        <h3 className='ncast'>Cast</h3>
        <p className='nwords'>Cast overview, first billed only:</p>

        <table className='ntable table-striped table-border table-light table-responsive'>
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
        {/* <div className='fullCast'>See full cast >></div> */}
        </div>

        <div>
          <ActorModal actor={this.props.actor} actorDescription={this.props.actorDescription} 
          show={this.state.show} actorName={this.state.actorName} 
          actorImage={this.state.actorImage} closeModal={this.closeModal}/>
        </div>
        <div>
          <CharacterModal actor={this.props.actor} showChar={this.state.showChar} 
          actorName={this.state.actorName} quote={this.props.quote} charname={this.state.charname}
          actorImage={this.state.actorImage} closeModal={this.closeModal}/>
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
