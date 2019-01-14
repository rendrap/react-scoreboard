const title = <h1>My first react element</h1>;

const desc = <p>I just learned how to create a React node</p>;

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
