import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/services/env.service';
import { SharedService } from 'src/app/services/shared.service';
import { ScoreComponent } from '../score/score.component';

declare var $: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  question_bank:any = [];
  current_question: any = {};
  question_complete:boolean = false;
  curr_cat_idx:any = 0;
  curr_que_idx:any = 0;
  is_yay:boolean = false;
  timer: any;
  interval: any;
  time_left = 0;
  failed_attempt = false;
  
  @ViewChild(ScoreComponent) score!: ScoreComponent;

  constructor(
    private _shared: SharedService,
    private _router: Router,
    public _env: EnvService
  ) { }

  ngOnInit(): void {
    // temporary - will have to fetch data from db
    this._shared.globalQuestionBank = JSON.parse(JSON.stringify(this._shared.globalQuestionBankDummy));
    
    // question_bank needs to be populated by service from DB - including globalQuestionBank
    this.question_bank = this._shared.globalQuestionBank;
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

  show_question(cat_index: any, q_index: any) {
    this.curr_cat_idx = cat_index;
    this.curr_que_idx = q_index;
    // console.log(cat_index, q_index);
    var question = this.question_bank[cat_index]['questions'][q_index];
    this.question_complete = false;
    if(question.was_correct == null) {
      // show question
      // console.log(question);
      this.current_question = question;
      $('#currentQuestion').modal({ show: true, backdrop: 'static' });
      this.start_timer();
      
    } else {
      // already attempted - do nothing
      $('#currentQuestion').modal({ show: true, backdrop: 'static' });
    }
  }

  start_timer() {
    this.time_left = this._env.timeout / 1000;
    this.timer = setTimeout(() => {
      clearInterval(this.interval);
      this.time_out();
    }, this._env.timeout);
    this.interval = setInterval(() => {
      this.time_left = this.time_left - 1;
    }, 1000);
  }

  time_out() {
    this.question_complete = true;
    this.failed_attempt = true;
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['was_correct'] = false;
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['answered_by'] = this.score.get_current_player_alias();
    this.playSound('nay');
    this.score.add_score(false, this.current_question.points);
  }

  attempt(answer: String) {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.failed_attempt = false;
    this.question_complete = true;
    var is_correct = (this.current_question.answer == answer);
    this.is_yay = (this.current_question.answer == answer);
    if(is_correct) {
      // correct answer
      this.playSound('yay');
    } else {
      // wrong answer
      this.playSound('nay');
    }
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['was_correct'] = is_correct;
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['answered_by'] = this.score.get_current_player_alias();
    this.score.add_score(is_correct, this.current_question.points);
  }

  playSound(type: String){
    let sound = new Audio();
    sound.src = "../../../assets/audio/"+type+".mp3";
    sound.load();
    sound.play();
  }

  close_modal() {
    $('#currentQuestion').modal('hide');
  }

}
