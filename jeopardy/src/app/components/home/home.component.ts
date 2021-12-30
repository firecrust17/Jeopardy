import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  max_players = 20;
  shuffle = true;
  team_size:any = 0;
  team_options = [
    { "label": "No Teams", "value": 0 },
    { "label": "1 Team", "value": 1 },
    { "label": "2 Teams", "value": 2 },
    { "label": "3 Teams", "value": 3 },
    { "label": "4 Teams", "value": 4 },
    { "label": "5 Teams", "value": 5 },
    { "label": "6 Teams", "value": 6 },
    { "label": "7 Teams", "value": 7 },
    { "label": "8 Teams", "value": 8 },
    { "label": "9 Teams", "value": 9 },
    { "label": "10 Teams", "value": 10 },
  ];
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
      this.team_size = parseInt(this.team_size);

      if(this.team_size != 0 && final_players.length < this.team_size){
        alert('Team size cannot be greater than total players');
      } else {
        this._shared.globalPlayers = this.randomize_order_and_split_into_teams(final_players, this.shuffle);
        // console.log(this._shared.globalPlayers);
        this._router.navigate(['./game']);
      }
    }
  }

  randomize_order_and_split_into_teams(final_players: any, shuffle: boolean) {
    if (shuffle) {
      final_players = this.shuffleArray(final_players);
    }

    // split into teams
    var final_teams:any = [];
    if (this.team_size){
      var index = 0;
      for(var i=0; i<final_players.length; i++) {
        if(!final_teams[index]) {
          final_teams[index] = final_players[i];
        } else {
          final_teams[index]['name'] += ' + ' + final_players[i]['name'];
        }

        if (index+1 == this.team_size){
          index = 0;
        } else {
          index += 1;
        }
      }
    } else {
      final_teams = final_players;
    }

    // first player from random order gets the first turn
    for(var i=0; i<final_teams.length; i++) {
      final_teams[i]['turn'] = false;
    }
    final_teams[0]['turn'] = true;
    return final_teams;
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
