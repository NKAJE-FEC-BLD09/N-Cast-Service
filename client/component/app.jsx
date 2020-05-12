import React from 'react';
import CastTable from './CastTable.jsx';
//components
//import $ from 'jquery';

const data = {
  movie: '',
  actor: '',
  character: '',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      actor: [],
      actorDescription: [],
      character: [],
      quote: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/api/movieinfo/1')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        movie: data[0],
        actor: data[1],
        character: data[2],
        actorDescription: data[3],
        quote: data[4],
      })
    })
    .catch (err => {
      console.log('movie' + err)
    })
  }

//search bar

  

  render () {
    return (
      <div>
        <h3>Cast</h3>
        <p>Cast overview, first billed only</p>
        <section>
          <CastTable movie={this.state.movie} actor={this.state.actor} character={this.state.character} />
        </section>
      </div>
    )
  }
}  

export default App;