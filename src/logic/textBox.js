import { facts, jokes, answers } from './textBoxData';

const getTextBoxData = (data) => {
  const randomNumber = Math.floor(Math.random() * data.length);
  return data[randomNumber];
};

const displayTextBox = (text) => {
  const Paragraph = document.createElement("p");
  const answerOutput = document.getElementById("answerOutput");
 
  Paragraph.innerHTML = text;

  Paragraph.classList.add("textBox");
  answerOutput.appendChild(Paragraph);
 
};

const showAnswerForQuestion = (question, answer) => {
  const answerOutput = document.getElementById("answerOutput");
  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = question;
  questionParagraph.classList.add("question-text");
  

  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = answer;
  answerParagraph.classList.add("textBox");
 
  answerOutput.appendChild(questionParagraph);
  answerOutput.appendChild(answerParagraph);
  
};

const answerOutput = () => {
  const questionInput = document.getElementById("questionInput");
  const questionText = questionInput.value;
  questionInput.value = "";

  const randomAnswer = getTextBoxData(answers);
  showAnswerForQuestion(questionText, randomAnswer);
};


export const initTextBoxBehavior = () => {
  const jokeButton = document.getElementById("jokeButton");
  const factButton = document.getElementById("factButton");
  

  jokeButton.addEventListener("click", () => {
    const randomJoke = getTextBoxData(jokes);
    displayTextBox(randomJoke);
  });

  factButton.addEventListener("click", () => {
    const randomFact = getTextBoxData(facts);
    displayTextBox(randomFact);
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      answerOutput();
    }
  });
  //TODO:potential scroll down button
  // scrollDownButton.addEventListener("click", (event) => {
  //   const container = document.getElementById("questionContainer");
  
  //   if (event.deltaY > 0) {
  //     container.scrollBy({
  //       top: -1000,
  //       behavior: "smooth",
  //     });
  //   } 
  // });

  }
