import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score_board:any = [];
  current_player_index = 0;

  constructor(
    private _shared: SharedService,
  ) { 
    this.score_board = this._shared.globalPlayers;
  }

  ngOnInit(): void {
  }

  next_player_turn() {
    if(this.score_board.length - 1 == this.current_player_index) {
      this.current_player_index = 0;
    } else {
      this.current_player_index += 1;
    }

    for(var i=0; i<this.score_board.length; i++) {
      this.score_board[i]['turn'] = false;
    }
    this.score_board[this.current_player_index]['turn'] = true;
  }

  add_score(is_correct: boolean, points: Number) {
    // Add score for current player if correct answer
    if(is_correct) {
      this.score_board[this.current_player_index]['score'] += points;
    }
    this.next_player_turn();
  }

}
