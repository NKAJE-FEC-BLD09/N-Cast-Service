import React from 'react';
import ActorModal from 'react';


class ModalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='aName'>{this.props.actorName}</div>
        <div>
          <div><img className='image' src={this.props.actorImage}/></div>
        </div>
      </div>
    )
  }
}

export default ModalCard;