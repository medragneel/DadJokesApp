import { Component } from "react";
import Joke from "./joke";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Joke />
      </div>
    );
  }
}
export default App;
