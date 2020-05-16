import React from 'react';
import ActorModal from 'react';


class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  getDescription () {
    return this.props.actorDescription.map((eachDescription, i) => {
      if (eachDescription.name === this.props.actorName) {
      return (
        <div key='i'>{eachDescription.description}</div>
      )
    }
  });
}
  
  render() {
    return (
      <div className='container'>
      <div className='ncard'>
        <span><img className='nxbutton' src='https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png' onClick={this.props.closeModal}/></span>
        <div className='naName'>{this.props.actorName}</div>
        <div className='nunderaName'> Actor | Producer | Writer </div>
        <div className='nimageBorder'><img className='nimage' src={this.props.actorImage}/></div>
        <div  className='ndescription'>{this.getDescription()}</div>
        <div className='nfullBio'>See full bio >></div>  
        <div className='nfooterStuff'>Contact Info: View agent, publicits, legal on IMDbPro</div>
    
      </div>
      </div>
    )
  }
}

export default ModalCard;

//contact info and ||| can be broken up into seperate <divs>/<spans> 
//use span to have stuff run together without a line break