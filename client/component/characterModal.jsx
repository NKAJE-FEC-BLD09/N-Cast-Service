import React from 'react';
import ModalCardChar from './ModalCardChar.jsx'

class characterModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModalChar = this.closeModalChar.bind(this)
  }

  closeModalChar() {
    this.setState({showChar: false})
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
              actorDescription={this.props.actorDescription} showChar={this.props.showChar} closeModalChar={this.closeModalChar}
              quote={this.props.quote} charname={this.props.charname}/>
              </div>
            </div>
        </div>
      )
    }
  }
}

export default characterModal;