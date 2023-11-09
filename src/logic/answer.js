export const answers = [
  "Yes",
  "No",
  "Maybe",
  "Definitely",
  "I'm not sure",
  "Of course",
  "Certainly",
  "Absolutely",
  "Not a chance",
  "Ask again later",
  "Outlook not so good",
  "Signs point to yes",
  "You can count on it",
  "It is certain",
  "Without a doubt",
  "Reply hazy, try again",
  "My sources say no",
  "Cannot predict now",
  "Concentrate and ask again",
  "Better not tell you now",
  "Very doubtful",
  "As I see it, yes",
  "Don't count on it",
  "Most likely",
  "All signs point to no",
  "Very likely",
  "The stars say yes",
  "The stars say no",
  "Absolutely not",
  "Absolutely yes",
  "In your dreams",
  "Not in a million years",
  "Absolutely positively",
  "Highly unlikely",
  "Highly likely",
  "It's a mystery",
  "I have my doubts",
  "Certainly not",
  "Certainly yes",
  "The answer is unclear",
  "The answer is obvious",
  "In your favor",
  "Not in your favor",
  "Ask someone else",
  "No way",
  "Possibly",
  "Definitely maybe",
  "Without a doubt",
  "Definitely not",
  "Definitely yes",
  "It's a possibility",
  "It's unlikely",
  "It's very likely",
  "It's improbable",
  "The outlook is positive",
  "The outlook is negative",
  "Try again tomorrow",
  "Chances are slim",
  "Chances are good",
  "I'm leaning towards yes",
  "I'm leaning towards no",
  "I'm on the fence",
  "I'm undecided",
  "It's a toss-up",
  "In your best interest",
  "Against your best interest",
  "The choice is yours",
  "You decide",
  "You have the power",
  "It's not up to you",
  "It's up to fate",
  "The ball is in your court",
  "It's in the cards",
  "It's written in the stars",
  "It's up to destiny",
  "It's up to chance",
  "It's a gamble",
  "It's a sure thing",
  "It's a long shot",
  "It's a win-win",
  "It's a lose-lose",
  "It's all or nothing",
  "The answer is within you",
  "The answer is outside you",
  "You hold the key",
  "You don't hold the key",
  "It's a test of your intuition",
  "It's a test of your luck",
  "The future is uncertain",
  "The future is clear",
  "Believe in yourself",
  "Don't believe in yourself",
  "Trust your instincts",
  "Don't trust your instincts",
  "Listen to your heart",
  "Don't listen to your heart",
  "The odds are in your favor",
  "The odds are against you",
  "Take a chance",
  "Play it safe",
  "Follow your dreams",
  "Forget your dreams",
  "Follow the signs",
  "Ignore the signs",
  "Take a leap of faith",
  "Stay in your comfort zone",
  "It's all in your mind",
  "It's out of your control",
  "The answer is in the question",
  "The answer is beyond the question",
  "Trust the process",
  "Question the process",
  "It's a journey",
  "It's a destination",
  "Everything happens for a reason",
  "Everything is random",
  "The universe has a plan",
  "The universe is chaotic",
];

export const getAnswer = (answers) => {
  const randomNumber = Math.floor(Math.random() * answers.length);
  return answers[randomNumber];
};

// export const showAnswerForQuestion = (question, answer) => {
//   const answerOutput = document.getElementById("answerOutput");
//   const questionParagraph = document.createElement("p");
//   questionParagraph.textContent = question;
//   questionParagraph.classList.add("question-text");

//   const answerParagraph = document.createElement("p");
//   answerParagraph.textContent = answer;
//   answerParagraph.classList.add("answer-text");
 

//   answerOutput.appendChild(questionParagraph);
//   answerOutput.appendChild(answerParagraph);
// };

// const answerOutput = () => {
//   const questionInput = document.getElementById("questionInput");
//   const questionText = questionInput.value;
//   questionInput.value = "";

//   const randomAnswer = getAnswer(answers);
//   showAnswerForQuestion(questionText, randomAnswer);
// };
// export const initAnswerBehavior = () => {
//   window.addEventListener("keyup", (event) => {
//     if (event.key === "Enter") {
//       answerOutput();
    
//     }
//   });
// }





