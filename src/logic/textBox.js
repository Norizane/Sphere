import { answers, getAnswer} from './answer.js';
import { getJoke, jokes } from './tellMeJoke';
import { getFact, facts } from './tellMeFact';

const displayTextBox = (text) => {
  const Paragraph = document.createElement("p");
  const questionParagraph = document.createElement("p");
  const answerOutput = document.getElementById("answerOutput");
 

  
  questionParagraph.textContent = question;

  Paragraph.innerHTML = text;

  questionParagraph.classList.add("question-text");
  Paragraph.classList.add("answer-text");
  answerOutput.appendChild(Paragraph);
  answerOutput.appendChild(questionParagraph);
};


const answerOutput = () => {
  const questionInput = document.getElementById("questionInput");
  const questionText = questionInput.value;
  questionInput.value = "";

  const randomAnswer = getAnswer(answers);
  showAnswerForQuestion(questionText, randomAnswer);
};


export const initTextBoxBehavior = () => {
  const jokeButton = document.getElementById("jokeButton");
  const factButton = document.getElementById("factButton");
  const questionInput = document.getElementById("questionInput");

  

  jokeButton.addEventListener("click", () => {
    const randomJoke = getJoke(jokes);
    displayTextBox(randomJoke);
  });

  factButton.addEventListener("click", () => {
    const randomFact = getFact(facts);
    displayTextBox(randomFact);
  });


  windows.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      answerOutput();
    }});


    // window.addEventListener("wheel", (event) => {
    //   const container = document.getElementById("answerOutput")

    //   if (event.deltaY > 0) {
    //     container.scrollBy({
    //       top: 100, 
    //       behavior: "smooth"
    //     });
    //   } else {
    //     container.scrollBy({
    //       top: -100, 
    //       behavior: "smooth"
    //     });
    //   }
    // });
  }
