import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private _shared: SharedService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if(!this._shared.globalPlayers.length) {
      this._router.navigate(['./home']);
    }
  }

  confirm_home() {
    let res = confirm("Are you sure you want to go back? All progress will be lost.");
    if(res){
      this._router.navigate(['./home']);
    } else {
      // do nothing
    }
  }

}
