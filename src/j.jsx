import { Component } from "react";
import "./jk.css";

class J extends Component {
  getColor = () => {
    if (this.props.votes >= 15) {
      return "#1C7947";
    } else if (this.props.votes >= 12) {
      return "#91C788";
    } else if (this.props.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.votes >= 3) {
      return "#FFC107";
    } else if (this.props.votes > 0) {
      return "#FF6363";
    } else {
      return "#b42b51";
    }
  };
  getEmoji = () => {
    if (this.props.votes >= 15) {
      return (
        <span role="img" aria-label="emoji">
          &#128514;
        </span>
      );
    } else if (this.props.votes >= 12) {
      return (
        <span role="img" aria-label="emoji">
          &#128518;
        </span>
      );
    } else if (this.props.votes >= 9) {
      return (
        <span role="img" aria-label="emoji">
          &#128515;
        </span>
      );
    } else if (this.props.votes >= 6) {
      return (
        <span role="img" aria-label="emoji">
          &#128527;
        </span>
      );
    } else if (this.props.votes >= 3) {
      return (
        <span role="img" aria-label="emoji">
          &#128532;
        </span>
      );
    } else if (this.props.votes >= 0) {
      return (
        <span role="img" aria-label="emoji">
          &#128528;
        </span>
      );
    } else {
      return (
        <span role="img" aria-label="emoji">
          &#128545;
        </span>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <div className="btns">
          <div className="arrow down" onClick={this.props.down}>
            &#8595;
          </div>
          <h1 className="vote" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </h1>
          <div className="arrow down" onClick={this.props.up}>
            &#8593;
          </div>
        </div>
        <div className="joke">{this.props.joke}</div>
        <div className="emoji">{this.getEmoji()}</div>
      </div>
    );
  }
}
export default J;
