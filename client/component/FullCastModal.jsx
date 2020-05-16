import React from 'react';
import FullCastCard from './FullCastCard.jsx'

class FullCastModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.showFullCast === false) {
      return ( 
        null
      )
    } else {
      return (
        <div>
          <FullCastCard actor={this.props.actor} getModal={this.props.getModal} 
          closeModal={this.props.closeModal} getModalChar={this.props.getModalChar}/>
        </div>
      )
    }
  }
}

export default FullCastModal;

//TODO
//link the actormodal to this one
//link the character modal to this one