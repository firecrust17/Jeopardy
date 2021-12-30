import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    // // temporary
    // this.globalPlayers = [
    //   {name: "A", score: 0, turn: true},
    //   {name: "C", score: 0, turn: false},
    //   {name: "B", score: 0, turn: false},
    // ];

  }

  globalPlayers:any = [];
  globalQuestionBank:any = [];
  globalQuestionBankDummy:any = [
    {
      category: "Movies",
      questions: [
        {
          points: 200,
          question: "What is your name?What is your name?What is your name?What is your name?What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "Geography",
      questions: [
        {
          points: 200,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "History",
      questions: [
        {
          points: 200,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "Books",
      questions: [
        {
          points: 200,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "Sports",
      questions: [
        {
          points: 200,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "Politics",
      questions: [
        {
          points: 200,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What is your name?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Aneesh", "Sachin", "Tanya"],
          answer: "Aneesh",
          was_correct: null,
          answered_by: null
        },
      ]
    },
  ];
  
  full_reset() {
    this.globalPlayers = [];
    this.globalQuestionBank = [];
  }
  

}
