import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shuffle = true;
  players = [{
    "name": "",
    "score": 0
    },{
    "name": "",
    "score": 0
    }];
  /**
   * players = [{
   *   'name': 'Aneesh',
   *   'score': 100,
   *   'turn': true,
   * }]
   */

  constructor(
    private _router: Router,
    private _shared: SharedService
  ) { 
    this._shared.full_reset();
  }

  ngOnInit(): void {
  }

  add_player() {
    // minimum 2 / maximum 10
    this.players.push({
      'name': '',
      'score': 0
    });
  }

  remove_player(index: any) {
    // minimum 2 / maximum 10
    this.players.splice(index,1);
  }

  get_players() {
    // Names should be unique
    let final_players = [];
    let player_names:any = {};
    for(let i=0; i<this.players.length; i++) {
      let trim_name = this.players[i].name.trim();
      if(trim_name != '') {
        if (player_names[trim_name] == undefined) {
          player_names[trim_name] = true;
          final_players.push(this.players[i])
        } else {
          alert('Please enter unique names.');
          return;
        }
      } else {
        // do nothing
      }
    }
    // At least 2 players required
    if (final_players.length < 2) {
      alert('Atleast 2 players required');
    } else {
      this._shared.globalPlayers = this.randomize_order(final_players, this.shuffle);
      // console.log(this._shared.globalPlayers);
      this._router.navigate(['./game']);
    }
  }

  randomize_order(final_players: any, shuffle: boolean) {
    // TODO - Add randomize logic
    if (shuffle) {
      final_players = this.shuffleArray(final_players);
    }
    
    // first player from random order gets the first turn
    for(var i=0; i<final_players.length; i++) {
      final_players[i]['turn'] = false;
    }
    final_players[0]['turn'] = true;
    return final_players;
  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
  
}
