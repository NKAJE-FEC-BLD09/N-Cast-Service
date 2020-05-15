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
        <div>{eachDescription.description}</div>
      )
    }
  });
}
  
  render() {
    return (
      <div className='container'>
      <div className='card'>
        <span><img className='xbutton' src='https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png' onClick={this.props.closeModal}/></span>
        <div className='aName'>{this.props.actorName}</div>
        <div className='underaName'> Actor | Producer | Writer </div>
        <div className='imageBorder'><img className='image' src={this.props.actorImage}/></div>
        <div  className='description'>{this.getDescription()}</div>
        <div className='fullBio'>See full bio >></div>  
        <div className='footerStuff'>Contact Info: View agent, publicits, legal on IMDbPro</div>
    
      </div>
      </div>
    )
  }
}

export default ModalCard;

//contact info and ||| can be broken up into seperate <divs>/<spans> 
//use span to have stuff run together without a line break