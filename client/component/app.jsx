import React from 'react';
import Cast from './Cast.jsx';
import style from '../dist/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      actor: [],
      actorDescription: [],
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
        actorDescription: data[2],
        quote: data[3],
      })
    })
    .catch (err => {
      console.log('movie' + err)
    })
  }

//search bar

  

  render () {
    console.log(this.state)
    return (
      <div>
        <h3>Cast</h3>
        <p>Cast overview, first billed only:</p>
        <section>
          <Cast actor={this.state.actor} />
        </section>
      </div>
    )
  }
}  

export default App;