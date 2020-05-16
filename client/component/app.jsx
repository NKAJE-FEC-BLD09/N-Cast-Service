import React from 'react';
import CastTable from './CastTable.jsx';
import '../dist/main.css';

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

// add search bar
  //if movie is in the list of 100 (map over list) 
  //send the id to the fetch request

  render () {
    return (
      <div>
        <section>
          <CastTable actor={this.state.actor} actorDescription={this.state.actorDescription} quote={this.state.quote}/>
        </section>
      </div>
    )
  }
}  

export default App;