import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

//const Header = ({players, title}) => {
const Header = (props) => {
  const { players, title} = props;
  return (
    <header>
      <Stats players={players}/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.PropTypes = {
  title: PropTypes.number,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;