import React from 'react';
import App from './app.jsx';
import ModalCard from './ModalCard.jsx';

class ActorModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (this.props.show === false) {
      return (
        null
      )
    } else {
      return (
          <div className='actorModal' >
            <div><ModalCard actorName={this.props.actorName} actorImage={this.props.actorImage} actor={this.props.actor} 
            actorDescription={this.props.actorDescription} show={this.props.show}/></div>
          </div>
      )
    }
  }
}

export default ActorModal;


//how do I get the actor name that is being clicked on to render here too--> where is there a connection point to note the actor name that is in the tile to the modal 