//Declarative
/*function App() {
  //false
  //isDone = false;
  //true
  isDone = true;
  const strikethrough = { textDecoration: "line-through" };
  return (
    <div>
      <p style={isDone ? strikethrough : null}>Buy Milk</p>
    </div>
  );
}*/

//Imperative
/*function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Strike Text</button>
      <button onClick={unStrike}>Revert Change</button>
    </div>
  );
}*/

//Imperative isDone
/*var isDone = false;

function strike() {
  isDone = true;
  console.log(isDone);
}

function unStrike() {
  isDone = false;
  console.log(isDone);
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy Milk</p>
      <button onClick={strike}>Strike Text</button>
      <button onClick={unStrike}>Revert Change</button>
    </div>
  );
}*/

//Imperative isDone
var isDone = false;

function strike() {
  isDone = true;
  console.log(isDone);
}

function unStrike() {
  isDone = false;
  console.log(isDone);
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy Milk</p>
      <button onClick={strike}>Strike Text</button>
      <button onClick={unStrike}>Revert Change</button>
    </div>
  );
}

export default App;
