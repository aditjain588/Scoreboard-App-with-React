import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './Icon';
import PropTypes from 'prop-types';

class Player extends PureComponent{

  static PropTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render(){
    //const {name, id, score} = this.props; destructuring props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <Icon IsHighScore={this.props.isHighScore}/>
          { this.props.name }
        </span>
        
        <Counter score={this.props.score}
          changeScore={this.props.changeScore}
          index={this.props.index}
        />
      </div>
    );
  }
}

export default Player;