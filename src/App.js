import { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Login/>
      // <Home />
    );
  }
}

export default App;
