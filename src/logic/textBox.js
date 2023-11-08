// import { someData } from './answer.js';
import { getJoke, jokes } from './tellMeJoke';
import { getFact, facts } from './tellMeFact';

const displayTextBox = (text) => {
  const Paragraph = document.createElement("p");

  Paragraph.innerHTML = text;
  Paragraph.classList.add("answer-text");
  Paragraph.classList.add("answer-margin");

  const answerOutput = document.getElementById("answerOutput");

  answerOutput.appendChild(Paragraph);
};
export const initTextBoxBehavior = () => {
  const jokeButton = document.getElementById("jokeButton");
  const factButton = document.getElementById("factButton");

  jokeButton.addEventListener("click", () => {
    const randomJoke = getJoke(jokes);
    displayTextBox(randomJoke);
  });

  factButton.addEventListener("click", () => {
    const randomFact = getFact(facts);
    displayTextBox(randomFact);
  });
  console.log("dupa")
}
