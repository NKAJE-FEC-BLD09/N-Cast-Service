import React from 'react';

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
        <div>stuff</div>
      )
    }
  }
}

export default FullCastModal;

//TODO
//link the actormodal to this one
//link the character modal to this one