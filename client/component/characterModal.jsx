import React from 'react';
import App from './app.jsx';

class characterModal extends React.Component {
  constructor(props) {
    super(props);
  }

  getQuote()  {
    //map over quote to get the stuff for each character
  }

  render() {
    if (this.props.showChar === false) {
      return (
        <div>notworkingyet</div>
      )
    } else {
      return (
        <div>
          <div className='actorModal' >
              <div>
                <ModalCardChar actorName={this.props.actorName} actorImage={this.props.actorImage} actor={this.props.actor} 
              actorDescription={this.props.actorDescription} showChar={this.props.showChar} closeModal={this.props.closeModal}
              quote={this.getQuote()}/>
              </div>
            </div>
        </div>
      )
    }
  }
}

export default characterModal;