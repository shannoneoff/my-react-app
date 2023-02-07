import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import Children from './children';
import Child from './child';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const myElement = <h4>This text comes to you via JSX!</h4>;
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(myElement);

function Arch() {
  return <h2>St. Louis has a great Arch</h2>;
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Arch />);

class Main extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <Children />;  // returns Children class from children.js
  }
}
render(<Main />, document.getElementById('root4'));

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Tesla",
      model: "Y",
      color: "blue",
      year: 2021
    };
  }
  changeColor = () => {
    // color will change from "blue" to "green" when button is clicked
    this.setState({ color: "green" });
  }
  render() {
    return (
      <div>
        <p>
          My {this.state.brand} is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type='button' onClick={this.changeColor}>
          Click to change color
        </button>
      </div>
    );
  }
}
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Vehicle />);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritenumber: "forty-eight" };
  }
  componentDidMount() {
    setTimeout(() => {  // automatically changes the number
      this.setState({ favoritenumber: "nine" }) // from "forty-eight" to "nine"
    }, 4000)
  }
  render() {
    return (
      <h3>My favorite number is {this.state.favoritenumber}.</h3>
    );
  }
}
const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<Header />);

class Herder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritestate: "North Dakota" };
  }
  // static will not allow favoritestate to change
  static getDerivedStateFromProps(props, state) {
    return { favoritestate: props.favstate };
  }
  render() {
    return (
      <h5>My favorite state is {this.state.favoritestate}.</h5>
    );
  }
}
const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<Herder favstate="Oregon" />);

class Hater extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteplanet: "Mars" };
  }
  shouldComponentUpdate() {
    return true;  // allows component to update state
  }
  changePlanet = () => {
    this.setState({ favoriteplanet: "Saturn" });
  }
  render() {
    return (
      <div>
        <h1>My favorite planet is {this.state.favoriteplanet}</h1>
        <button type='button' onClick={this.changePlanet}>Change planet</button>
      </div>
    );
  }
}
const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(<Hater />);

class Hotter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "purple" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "turquoise"})
    }, 5000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favoritecolor + ".";
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor + ". ----";
  }
  render() {
    return (
      <div>
        <h3>---- Someone's favorite color is {this.state.favoritecolor}.</h3>
        <div id='div1'></div>
        <div id='div2'></div>
      </div>
    );
  }
}
const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(<Hotter />);

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => { // deletes header after button is clicked
    this.setState({ show: false });
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />; // Child class is found in child.js
    };
    return (
      <div>
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}
const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(<Container />);

function Basketball() {
  const shoot = () => {
    alert("You scored!");
  }
  return (
    <button onClick={shoot}>Take the shot!</button> // using an event handler as object
  );
}
const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(<Basketball />);

class Bind extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numOfClicks: 0 };  // shows how many times the button is clicked
  }
  handleClick = () => { // event handler for button clicks
    console.log('From handleClick()', this);
    this.setState({ numOfClicks: this.state.numOfClicks + 1 }); // calculates number of clicks
  }
  render() {
    console.log('From render()', this);
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click</button>
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
    )
  }
}
const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(<Bind />);
