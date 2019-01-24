
const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
};


class Counter extends React.Component {

  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score : prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState( prevState => ({
      score : prevState.score - 1
    }));
  };

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={() => this.decrementScore()}> - </button>
        <span className='counter-score'>{ this.state.score }</span>
        <button className='counter-action increment' onClick={() => this.incrementScore()}> + </button>
      </div>
    );
  }
};

class App extends React.Component {
  state = {
    players: [
    {
    name: 'Bambang',
    id: 1
  },
  {
    name: 'Tina',
    id: 2
  },
  {
    name: 'Ruby',
    id: 3
  },
  {
    name: 'Eko',
    id: 4
  }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return{
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />

        {/* Player list */}
        {this.state.players.map(player =>
          (<Player
            name={player.name}
            key={player.id.toString()}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />)
        )}

      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
