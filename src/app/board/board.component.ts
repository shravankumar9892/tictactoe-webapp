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

  ngOnInit() {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xisNext = true
  }

  get player() {
    if(this.xisNext){
      return 'X'
    }
    else {
      return 'O'
    }
  }
}
