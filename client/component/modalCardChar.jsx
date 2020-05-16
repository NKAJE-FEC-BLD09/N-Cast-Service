import React from 'react';
import { each } from 'bluebird';

class ModalCardChar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  getQuote() {
    return this.props.quote.map((eachQuote, i) => {
      if (eachQuote.charname === this.props.charname) {
        return (
          <tr key={i}>
            <td>{eachQuote.charname} : </td>
            <td> {eachQuote.quote}</td>
          </tr>
        )
      }
    })
  }

  render() {
    return (
      <div className='container'>
      <div className='ncard'>
      <span><img className='nxbutton' src='https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png' onClick={this.props.closeModal}/></span>
        <div className='ncName'>{this.props.charname}</div>
        {/* <div className='nimageBorder'><img className='image' src={this.props.actorImage}/></div> */}
        <div>
        <table className='ntableQuote table-light table-striped table-border'>
          <tbody>
            {this.getQuote()}
          </tbody>
        </table>
        </div>    
      </div>
      </div>
    )
  }
}

export default ModalCardChar;



//TODO
//set up an alternate for if there are no quotes from the character
