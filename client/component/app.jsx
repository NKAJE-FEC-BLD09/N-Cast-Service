import React from 'react';
import CastTable from './CastTable.jsx';
//components
//import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      actor: '',
      actorDescription: '',
      character: '',
      quote: '',
      actorsInMovie: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/api/3')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        movie: data[0].movietitle
      })
    })
    .catch (err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        Creation Station
        <h3>Cast</h3>
        <p>Cast overview, first billed only</p>
        <section>
          <CastTable movie={this.state.movie}/>
        </section>
      </div>
    )
  }
}

export default App;