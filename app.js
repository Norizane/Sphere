import "./main.scss";
import { initTextBoxBehavior } from "./src/logic/textBox";

const animateScrollDown = () => {
  const element = document.getElementById("animation");
  const footer = document.getElementById("footerSection");
  const Logo = document.getElementById("Logo");

  element.style.marginTop = "-560px";
  Logo.style.marginTop = "16px";

  footer.classList.add("footer-hide");
};

const scrollDownAnimation = () => {
  const header = document.getElementById("scrollDownHeader");

  setTimeout(() => {
    header.classList.add("hidden");
  }, 2000);
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
scrollDownAnimation();
