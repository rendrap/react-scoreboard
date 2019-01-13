const title = React.createElement(
  'h1',
  { id: 'main-title' },
  'My first React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned to create a React node and render it into the DOM'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root'));

// console.log(title);3
