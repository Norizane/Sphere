import {
  addData,
  displayStoredData,
} from "./localStorage";
import { sendMessage, jokesAndFacts, chatResponse} from "./chatGPT";


const displayTextBox = (text) => {
  const paragraph = document.createElement("div");
  const answerOutput = document.getElementById("answerOutput");

  paragraph.innerHTML = text;
  paragraph.classList.add("textBox");

  answerOutput.appendChild(paragraph);
};

const showAnswerForQuestion = (question, chatResponse) => {
  const answerOutput = document.getElementById("answerOutput");
  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = question;
  questionParagraph.classList.add("question-text");

  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = chatResponse;
  answerParagraph.classList.add("textBox");

  answerOutput.appendChild(questionParagraph);
  answerOutput.appendChild(answerParagraph);
};

const questionOutput = () => {
  const questionInput = document.getElementById("questionInput");
  const questionText = questionInput.value;
  questionInput.value = "";


  sendMessage(questionText).then((chatResponse) => {
    showAnswerForQuestion(questionText, chatResponse);
    addData("Question", questionText);
    addData("Answer", chatResponse);
  });
};

export const initTextBoxBehavior = () => {
  const jokeButton = document.getElementById("jokeButton");
  const factButton = document.getElementById("factButton");
  const scrollDownButton = document.getElementById("scrollDownButton");


  let isScrollDownExecuted = false;

  const scrollDown = () => {
    if (!isScrollDownExecuted) {
      const container = document.getElementById("answerContainer");
  
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
  
      isScrollDownExecuted = true;
    }
  };
 

  jokeButton.addEventListener("click", () => {
    sendMessage("Tell me a joke").then((jokeResponse) => {
      displayTextBox(jokeResponse);
      addData("Joke", jokeResponse);
    });
  });


  factButton.addEventListener("click", () => {
    sendMessage("Tell me a fact").then((factResponse) => {
      displayTextBox(factResponse);
      addData("Fact", factResponse);
    });
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


  setTimeout(scrollDown, 5000);
  displayStoredData();
};


