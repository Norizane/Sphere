import './style.css';
import { initTextBoxBehavior  } from './src/logic/textBox'
import {initAnswerBehavior} from './src/logic/answer';

const animateScrollDown = () => {
  const element = document.getElementById("animation");
  const footer = document.getElementById("footerSection");
  const Logo = document.getElementById("Logo");

  element.style.marginTop = "-560px";
  footer.style.marginBottom = "0";
  Logo.style.marginTop = "16px";
};

const animateQuestionSection = () => {
  const element = document.getElementById("secondSection");

  element.style.opacity = 1;
};

const animationChange = () => {
  const iris = document.getElementById("iris");

  iris.style.animation = " move-eye-skew2 5s ease-out infinite";
};

window.addEventListener("wheel", () => {
  animateQuestionSection();
  animateScrollDown();
  animationChange();
});

initTextBoxBehavior();
initAnswerBehavior();