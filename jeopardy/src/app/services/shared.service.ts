import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  globalPlayers:any = [];

  full_reset() {
    this.globalPlayers = [];
  }
  

}
