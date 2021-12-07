import { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import J from "./j";
import "./styles.css";

class Joke extends Component {
  static defaultProps = {
    numjokes: 5
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      votes: 0
    };
  }
  async componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }
  getJokes = async () => {
    let jokes = [];
    while (jokes.length < this.props.numjokes) {
      let j = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: uuidv4(), joke: j.data.joke, votes: 0 });
    }

    this.setState((st) => ({
      jokes: [...st.jokes, ...jokes]
    }),() =>
    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
  };
  handleVotes = (id, inc) => {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + inc } : j
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  };
  handleClick = () => {
    this.getJokes();
  };
  render() {
    return (
      <div className="jokes">
        <h1 className="title">
          <span>Dad</span> Jokes
        </h1>
        <span
          role="img"
          aria-label="new"
          className="btn"
          onClick={this.handleClick}
        >
          &#127381;
        </span>
        {this.state.jokes.map((j) => {
          return (
            <J
              key={j.id}
              id={j.id}
              joke={j.joke}
              votes={j.votes}
              up={() => this.handleVotes(j.id, 1)}
              down={() => this.handleVotes(j.id, -1)}
            />
          );
        })}
      </div>
    );
  }
}
export default Joke;
