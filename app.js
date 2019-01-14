const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 2</span>
    </header>
  );
};

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
