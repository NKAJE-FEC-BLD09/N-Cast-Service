import React from 'react';
import ActorModal from 'react';


class ModalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDescription () {
    return this.props.actorDescription.map((eachDescription) => {
      if (eachDescription.name === this.props.actorName) {
      return (
        <div className='description'>{eachDescription.description}</div>
      )
    }
  });
}
  
  render() {
    return(
      <div className='container'>
      <div className='card'>
        <div className='aName'>{this.props.actorName}</div>
        <div className='underaName'> Actor | Producer | Writer </div>
        <div className='imageBorder'><img className='image' src={this.props.actorImage}/></div>
        <div>{this.getDescription()}</div>     
      </div>
      </div>
    )
  }
}

export default ModalCard;