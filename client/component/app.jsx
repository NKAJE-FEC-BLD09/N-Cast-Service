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
      movie: '',
      actor: '',
      actorDescription: '',
      character: '',
      quote: '',
      actorsInMovie: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/api/movieinfo/3')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        movie: data[0],
        actor: data[1],
        actorDescription: data
      })
    })
    .catch (err => {
      console.log('movie' + err)
    })

    // fetch('http://localhost:3003/api/actor/3')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     actor: data
    //   })
    // })
    // .catch (err => {
    //   console.log('actor' + err)
    // })

    // fetch('http://localhost:3003/api/character/3')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     character: data
    //   })
    // })
    // .catch (err => {
    //   console.log('character' + err)
    // })

    // fetch('http://localhost:3003/api/inmovie/3')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     actorsInMovie: data
    //   })
    // })
    // .catch (err => {
    //   console.log('inmovie' + err)
    // })
  }
//onclick for modals
    // fetch('http://localhost:3003/api/description/3')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     movie: data[0].movietitle
    //   })
    // })
    // .catch (err => {
    //   console.log('movie' + err)
    // })

    // fetch('http://localhost:3003/api/quote/3')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     movie: data[0].movietitle
    //   })
    // })
    // .catch (err => {
    //   console.log('movie' + err)
    // })

  grabActors() {
    //loops over the array of objects that contain the actor info
    //pull name and image
    this.state.actor.map((each) => {
      return each.name
    })
    }

  

  render () {
    return (
      <div>
        Creation Station
        <h3>Cast</h3>
        <p>Cast overview, first billed only</p>
        <section>
          <CastTable movie={this.state.movie} actor={this.state.actor} character={this.state.character} 
          actorsInMovie={this.state.actorsInMovie}
          grabActors={this.state.grabActors}/>
        </section>
      </div>
    )
  }
}

export default App;