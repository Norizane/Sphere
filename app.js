// SCROLL DOWN ANIMATION
window.addEventListener("scroll", () => {
  
  const element = document.getElementById("animation");
  const footer = document.getElementById("footerSection")
  const Logo = document.getElementById("Logo")
  
  const scrollable = window.scrollY;
  const scrolled = 120;
  
  if (scrolled <= scrollable){
    element.style.marginTop = "-500px";
    footer.style.marginBottom = "0";
    Logo.style.marginTop = "16px"
  }

})



// QUESTION SECTION ANIMATION 




window.addEventListener("scroll", () => {
  const element = document.getElementById("#secondSection");

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;;
  
  if (scrolled === scrollable){
    element.style.animation = delete 20 ;
    element.style.opacity = 1 ;
  }

})

