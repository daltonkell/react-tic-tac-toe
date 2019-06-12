import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

/* Square renders a single <button>. constructor
   initializes state as null, and on click the contents
   becomes an X. */
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  /* By calling this.setState() from an onClick handler, we tell React to re-render
     that Square whenever its <button> is clicked. After the update, the Square's
     this.state.value will be 'X', so we'll see the X on the game board. */
  render() {
    return (
      <button
        className="square"
        onClick={ () => this.setState({value: 'X'})}
      >
        {this.state.value}
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
  renderSquare(i) {
    return <Square value={i} />;
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

