import React from 'react';

class FullCastCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getFullCastTable () {
    return this.props.actor.map((each, i) => {
      return (
      <tr key={i}>
        <td className='nimage'><img className='nactorImage' src={each.image} onClick={ (e) => {e.preventDefault(); this.props.getModal(each.image, each.name, each.charname)}}/></td>
        <td className='nactorName' onClick={(e) => {e.preventDefault(); this.props.getModal(each.image, each.name, each.charname)}}>{each.name}</td>
        <td className='ndots'>...</td>
        <td className='ncharacterName' onClick={(e) => {e.preventDefault(); this.props.getModalChar(each.image, each.name, each.charname)}}>{each.charname}</td>
      </tr>
      )
    });
  }


  render() {
    return (
      <div className='container'>
      <div className='ncard'>
      <span><img className='nxbutton' src='https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png' onClick={this.props.closeModal}/></span>
        <table className='nFulltable table-striped table-border table-light table-responsive'>
          <tbody>
            {this.getFullCastTable()}
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}

export default FullCastCard;