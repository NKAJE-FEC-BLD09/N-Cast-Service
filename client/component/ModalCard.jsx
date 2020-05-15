import React from 'react';
import ActorModal from 'react';


class ModalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>{this.props.actorName}</div>
      </div>
    )
  }
}

export default ModalCard;