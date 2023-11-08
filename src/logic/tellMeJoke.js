export const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why was the math book sad? Because it had too many problems.",
  "I used to play piano by ear, but now I use my hands.",
  "Why don't oysters donate to charity? Because they are shellfish.",
  "How does a penguin build its house? Igloos it together!",
  "What did one wall say to the other wall? 'I'll meet you at the corner!'",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm on a whiskey diet. I've lost three days already.",
  "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What did the janitor say when he jumped out of the closet? 'Supplies!'",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't seagulls fly over the bay? Because then they'd be bagels!",
  "I'm friends with all electricians. We have great current connections.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "How do you organize a space party? You 'planet'!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm on a whiskey diet. I've lost three days already.",
  "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I'm friends with all electricians. We have great current connections.",
  "Why don't seagulls fly over the bay? Because then they'd be bagels!",
  "What did one wall say to the other wall? 'I'll meet you at the corner!'",
  "What do you call a fish with no eyes? Fsh!",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I used to play piano by ear, but now I use my hands.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I'm friends with all electricians. We have great current connections.",
  "Why don't seagulls fly over the bay? Because then they'd be bagels!",
  "I'm on a whiskey diet. I've lost three days already.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "How does a penguin build its house? Igloos it together!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What did one wall say to the other wall? 'I'll meet you at the corner!'",
];

export const getJoke = (jokes) => {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  return jokes[randomNumber];
};


// const displayJoke = () => {
//   const randomJoke = getJoke(jokes);

//   const jokeParagraph = document.createElement("p");

//   jokeParagraph.innerHTML = randomJoke;
//   jokeParagraph.classList.add("answer-text");
//   jokeParagraph.classList.add("answer-margin")


//   const answerOutput = document.getElementById("answerOutput");

//   answerOutput.appendChild(jokeParagraph);
// };

// const jokeButton = document.getElementById("jokeButton");

// jokeButton.addEventListener("click", () => {
//   displayJoke();
// });
