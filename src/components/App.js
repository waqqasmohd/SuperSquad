import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';
import '../styles/index.css';
import SquadStats from './SquadStats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <div className="super">
          <div className="col-md-4">
            <CharacterList />
          </div>
          <div className="col-md-4">
            <HeroesList />
          </div>
          <div>
            <SquadStats className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
