import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Eugene",
        score: 0,
        id: 1
      },
      {
        name: "Precious",
        score: 0,
        id: 2
      },
      {
        name: "Golum",
        score: 0,
        id: 3
      },
      {
        name: "Hardy",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  handleScoreChange = (index, operation) => {
    this.setState( prevState => ({
      score: prevState.players[index].score+=operation
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return{
      players: [
        ...prevState.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId+=1
        }
      ]}
    })
  };

  highestScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highestScore = Math.max(...scores);
    if(highestScore){
      return highestScore;
    }
    return null;
  };

  render() {
    const highScore = this.highestScore();
    //{console.log("Highest score is: " + this.highestScore())}
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            isHighScore={highScore === player.score}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
