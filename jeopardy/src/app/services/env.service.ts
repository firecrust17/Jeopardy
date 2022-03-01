import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public max_players = 24;
  public show_image = false;
  public timeout = 120 * 1000; // timeout in ms


  constructor() { }
}
