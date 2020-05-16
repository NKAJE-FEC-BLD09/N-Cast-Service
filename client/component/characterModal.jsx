import React from 'react';
import ModalCardChar from './ModalCardChar.jsx'

class characterModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.showChar === false) {
      return (
        null
      )
    } else {
      return (
        <div>
          <div className='nactorModal' >
              <div>
                <ModalCardChar actorName={this.props.actorName} actor={this.props.actor} 
              actorDescription={this.props.actorDescription} showChar={this.props.showChar} closeModal={this.props.closeModal}
              quote={this.props.quote} charname={this.props.charname}/>
              </div>
            </div>
        </div>
      )
    }
  }
}

export default characterModal;