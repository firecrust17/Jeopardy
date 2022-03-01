import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    // // temporary
    // this.globalPlayers = [
    //   {name: "A", alias: "A", score: 0, turn: true},
    //   {name: "C", alias: "C", score: 0, turn: false},
    //   {name: "B", alias: "B", score: 0, turn: false},
    // ];

    // temporary - for testing
    this.globalPlayers = [
      {
          "name": "a + c",
          "score": 0,
          "alias": "Team 1",
          "turn": true
      },
      {
          "name": "b + d",
          "score": 0,
          "alias": "Team 2",
          "turn": false
      }
    ];

  }

  globalPlayers:any = [];
  globalQuestionBank:any = [];
  globalQuestionBankDummy:any = [
    {
      category: "Movies",
      questions: [
        {
          points: 200,
          question: "Which movie franchise has the character named 'Ron Weasley'?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Harry Potter", "Hobbit", "Lord of the Rings", "Avengers"],
          answer: "Harry Potter",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "Who is worthy of yeilding the Thor's Hammer?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Doctor Strange", "Iron Man", "Falcon", "Vision"],
          answer: "Vision",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "Who Played Black Panther in Avengers?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Chadwick Boseman", "Michael B. Jordan", "Jamie Foxx", "Samuel L. Jackson"],
          answer: "Chadwick Boseman",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "Which mythical creature in Harry Potter can only be seen if one has seen death?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Hippogriffs", "Dementors", "Thestrals", "Grim Reapers"],
          answer: "Thestrals",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "Which of the following Movies was Rosamund Pike not a part of?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Gone Girl", "The Old Guard", "Jack Reacher", "Fracture"],
          answer: "The Old Guard",
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
          question: "Second largest Country in the world, based on area?",
          type: "MCQ", // MCQ / Text / 
          choices: ["China", "Brazil", "Russia", "Canada"],
          answer: "Canada",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "In which Country is Machu Picchu?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Madagascar", "Peru", "Ghana", "Rome"],
          answer: "Peru",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is the capital of Switzerland?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Geneva", "Bern", "Zurich", "Basel"],
          answer: "Bern",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "Which of the following Countries is NOT land locked by exactly TWO countries?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Lesotho", "Andorra", "Nepal", "Eswatini"],
          answer: "Lesotho",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "Which Country has 24 rivers?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Russia", "India", "Canada", "China"],
          answer: "China",
          was_correct: null,
          answered_by: null
        },
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          points: 200,
          question: "Who was the first CEO of Twitter?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Ned Segal", "Parag Agrawal", "Jack Dorsey", "George Clooney"],
          answer: "Jack Dorsey",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "What color is #ffff00?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Red", "Yellow", "Green", "Blue"],
          answer: "Yellow",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "What is the smallest unit of Ethereum?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Finlay", "Usce", "mEth", "Wei"],
          answer: "Wei",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "Which of the following games does NOT have a billion downloads on google play store?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Subway Surfers", "Candy Crush Saga", "Temple Run", "Free Fire"],
          answer: "Temple Run",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What was the name of the OS Steve Jobs named after his daughter?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Lisa", "Lily", "Leah", "Lucy"],
          answer: "Lisa",
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
          question: "Who is the author of Fifty Shades of Grey?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Chetan Bhagat", "E. L. James", "Stephen King", "J. K. Rowling"],
          answer: "E. L. James",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "Who was the secret admirer of Lily Potter?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Sirius Black", "Alastor Moody", "Albus Dumbledore", "Severus Snape"],
          answer: "Severus Snape",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "Which of the following movie is NOT a Stephen King book adaptation?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Gerald's Game", "IT", "Doctor Sleep", "It Follows"],
          answer: "It Follows",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "Who wrote the book '1984'?",
          type: "MCQ", // MCQ / Text / 
          choices: ["George Hanwell", "George Andwell", "George Orwell", "George Windell"],
          answer: "George Orwell",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "Who is the Author of 'Dune'?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Naomi Alderman", "Frank Herbert", "Ursula K. Le Guin", "Philip K. Dick"],
          answer: "Frank Herbert",
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
          question: "Against which team did India win the 1983 World Cup?",
          type: "MCQ", // MCQ / Text / 
          choices: ["West Indies", "Australia", "Pakistan", "New Zealand"],
          answer: "West Indies",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "Which team won the first IPL (2008)?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Kolkata Knight Riders", "Rajasthan Royals", "Chennai Super Kings", "Deccan Chargers"],
          answer: "Rajasthan Royals",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "Which Country hosted the last Winter Olympics (2018)?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Italy", "Russia", "South Korea", "China"],
          answer: "South Korea",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "What is Canada’s national sport?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Basketball", "Lacrosse", "Pesapallo", "Ice Hockey"],
          answer: "Lacrosse",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "What year was the first ever Wimbledon tournament held?",
          type: "MCQ", // MCQ / Text / 
          choices: ["1856", "1861", "1869", "1877"],
          answer: "1877",
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
          question: "Who was the first Prime Minister of India?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawahar Lal Nehru", "Rajendra Prasad"],
          answer: "Jawahar Lal Nehru",
          was_correct: null,
          answered_by: null
        },
        {
          points: 400,
          question: "Which Country does Angela Merkel belong to?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Britain", "France", "Germany", "Italy"],
          answer: "Germany",
          was_correct: null,
          answered_by: null
        },
        {
          points: 600,
          question: "Who is the Chairperson of WHO?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Tedros Adhanom Ghebreyesus", "Anthony Fauci", "John Campbell", "Antonio Guterres"],
          answer: "Tedros Adhanom Ghebreyesus",
          was_correct: null,
          answered_by: null
        },
        {
          points: 800,
          question: "Abraham Loncoln was the ___ president of The United States?",
          type: "MCQ", // MCQ / Text / 
          choices: ["2nd", "16th", "5th", "12th"],
          answer: "16th",
          was_correct: null,
          answered_by: null
        },
        {
          points: 1000,
          question: "Which of the following Country is NOT a part of NATO Alliance?",
          type: "MCQ", // MCQ / Text / 
          choices: ["Estonia", "Poland", "Turkey", "Sweden"],
          answer: "Sweden",
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
