import { facts, jokes, answers } from './textBoxData';


const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};


const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

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

  const storedData = getStoredData("qaData") || [];
  storedData.push({ question, answer });
  setStoredData("qaData", storedData);
  
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
  const scrollDownButton = document.getElementById("scrollDownButton");

  jokeButton.addEventListener("click", () => {
    const randomJoke = getTextBoxData(jokes);
    displayTextBox(randomJoke);

    const storedJokes = getStoredData("jokesData") || [];
    storedJokes.push(randomJoke);
    setStoredData("jokesData", storedJokes);
  });

  factButton.addEventListener("click", () => {
    const randomFact = getTextBoxData(facts);
    displayTextBox(randomFact);
  
    const storedFacts = getStoredData("factsData") || [];
    storedFacts.push(randomFact);
    setStoredData("factsData", storedFacts);
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      answerOutput();
    }
  });

  const storedQuestionsAndAnswers = getStoredData("qaData") || [];
  storedQuestionsAndAnswers.forEach(({ question, answer }) => {
    showAnswerForQuestion(question, answer);
  });

  const storedJokes = getStoredData("jokesData") || [];
  storedJokes.forEach((joke) => {
    displayTextBox(joke);
  });

  const storedFacts = getStoredData("factsData") || [];
  storedFacts.forEach((fact) => {
    displayTextBox(fact);
  });
  // TODO:potential scroll down button
  scrollDownButton.addEventListener("click", () => {
    const container = document.getElementById("questionContainer");
  
    container.scrollBy({
      top: 100000000, 
      behavior: "smooth",
    });
  });

  }
