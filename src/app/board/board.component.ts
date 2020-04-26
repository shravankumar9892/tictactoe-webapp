import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[]
  xisNext: boolean
  winner: string

  constructor() { }

  /**
   * Lifehook cycle of the Board component
   */
  ngOnInit() {
    this.newGame()
  }

  /**
   * Resets & initializes objects for a new game
   */
  newGame(){
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xisNext = true
  }

  /**
   * player() -> current player value
   * Either X or O
   */
  get player() {
    if(this.xisNext){
      return 'X'
    }
    else {
      return 'O'
    }
  }

  /**
   * 
   * @param idx Index of the square clicked by player
   * makeMove() -> sets the value of square and objects
   */
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      // If the square is blank
      this.squares.splice(idx, 1, this.player)
      this.xisNext = !this.xisNext

    }

    this.winner = this.calculateWinner(this.squares)
  }

  /**
   * 
   * @param squares Represents current state of 9 squares of a tic tac toe
   * calculateWinner() -> returns X or O or null (winner)
   */
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
