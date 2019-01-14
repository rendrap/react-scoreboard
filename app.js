const desc = 'I just learned how to create a React node';
const myTitleID = 'main-title';
const name = 'Rendra';

const header = (
  <header>
    <h1 id={ myTitleID }>{ name }'s First React Element!</h1>
    <p>{ desc }</p>
  </header>

);

ReactDOM.render(
  header,
  document.getElementById('root'));

// console.log(title);3
