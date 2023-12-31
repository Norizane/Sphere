import { facts, jokes, answers } from "./textBoxData";
import {
  addData,
  displayStoredData,
} from "./localStorage";
import axios from 'axios';

const getTextBoxData = (data) => {
  const randomNumber = Math.floor(Math.random() * data.length);
  return data[randomNumber];
};

const displayTextBox = (text) => {
  const paragraph = document.createElement("div");
  const answerOutput = document.getElementById("answerOutput");

  paragraph.innerHTML = text;

  paragraph.classList.add("textBox");

  answerOutput.appendChild(paragraph);
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

const questionOutput = () => {
  const questionInput = document.getElementById("questionInput");
  const questionText = questionInput.value;
  questionInput.value = "";

  const randomAnswer = getTextBoxData(answers);
  showAnswerForQuestion(questionText, randomAnswer);
  addData("Question", questionText);
  addData("Answer", randomAnswer);
};

export const initTextBoxBehavior = () => {
  const jokeButton = document.getElementById("jokeButton");
  const factButton = document.getElementById("factButton");
  const scrollDownButton = document.getElementById("scrollDownButton");

  jokeButton.addEventListener("click", () => {
    const randomJoke = getTextBoxData(jokes);
    displayTextBox(randomJoke);
    addData("Joke", randomJoke);
  });

  factButton.addEventListener("click", () => {
    const randomFact = getTextBoxData(facts);
    displayTextBox(randomFact);
    addData("Fact", randomFact);
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      questionOutput();
    }
  });

  scrollDownButton.addEventListener("click", () => {
    const container = document.getElementById("answerContainer");
    container.scrollBy({
      top: 100000000,
      behavior: "smooth",
    });
  });

  displayStoredData();
};


const apiUrl = 'https://api.publicapis.org/entries';


const queryParams = {
  key1: 'apiKey',
  key2: 'Axolotl'
};


axios.get(apiUrl, {
  params: queryParams,
})
  .then(response => {
    console.log('Dane z serwera:', response.data);
  })
  .catch(error => {
    console.error('Błąd zapytania:', error);
  });