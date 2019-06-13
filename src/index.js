import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

/* Square renders a single <button>. constructor
   initializes state as null, and on click the contents
   becomes an X. */
class Square extends React.Component {

  /* By calling this.props.onClick() from an onClick handler, we tell React to re-render
     that Square whenever its <button> is clicked. After the update, the Square will
     take on the value of this.props.value, and will be seen on the game board. */
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

/* Board object. Contains two methods:
   1. renderSquare, which returns a Square object
      with a given value i
   2. render(), which yields a 3x3 "matrix"
      of Square objects, wtih values 1-9 */
class Board extends React.Component {

  /* Constructor sets the state of the game board as an
     array of size 9 with all null values; this array will
     allow us to keep track of the game by reading what's in
     each Square (X, O, null) */
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(9).fill(null),
    };
  }

  /* Pass two props from Board to Square: value anc onClick.
     onClick prop is a function that Square can call when clicked. */
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({squares: squares});
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

