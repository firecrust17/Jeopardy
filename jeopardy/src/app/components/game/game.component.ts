import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild(ScoreComponent) score!: ScoreComponent;

  constructor(
    private _shared: SharedService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    // temporary
    this._shared.globalQuestionBank = JSON.parse(JSON.stringify(this._shared.globalQuestionBankDummy));
    
    // question_bank needs to be populated by service from DB - including globalQuestionBank
    this.question_bank = this._shared.globalQuestionBank;
    this._shared.globalPlayers = [
      {name: "A", score: 0, turn: true},
      {name: "C", score: 0, turn: false},
      {name: "B", score: 0, turn: false},
    ];
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
      
    } else {
      // already attempted - do nothing
    }
  }

  attempt(answer: String) {
    this.question_complete = true;
    var is_correct = (this.current_question.answer == answer);
    // if(is_correct) {
    //   // correct answer
    //   alert("Correct answer");
    // } else {
    //   // wrong answer
    //   alert("Incorrect answer");
    // }
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['was_correct'] = is_correct;
    this.question_bank[this.curr_cat_idx]['questions'][this.curr_que_idx]['answered_by'] = this.score.get_current_player_name();
    this.score.add_score(is_correct, this.current_question.points);
  }

  close_modal() {
    $('#currentQuestion').modal('hide');
  }

}
