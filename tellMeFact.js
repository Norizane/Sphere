const facts = [
  "Honey never spoils. Archaeologists have even found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "The world's oldest known recipe is a recipe for beer.",
  "Bananas are berries, but strawberries aren't.",
  "Cows have best friends and can become stressed when they are separated from them.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted for just 38 minutes.",
  "Octopuses have three hearts.",
  "Hippopotamus milk is pink.",
  "A group of flamingos is called a 'flamboyance.'",
  "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "The dot over the lowercase 'i' and 'j' is called a 'tittle.'",
  "In Switzerland, it is illegal to own just one guinea pig because they are prone to loneliness.",
  "Polar bears' skin is black, and their fur is not actually white but translucent.",
  "The largest desert in the world is not the Sahara but Antarctica.",
  "A day on Venus is longer than a year on Venus. It rotates on its axis incredibly slowly.",
  "In the 16th century, Turkish women could initiate a divorce if their husbands didn't provide enough coffee.",
  "The unicorn is the national animal of Scotland.",
  "The smell of freshly-cut grass is actually a plant distress call.",
  "A day on Mercury is longer than its year.",
  "The original name for the search engine Google was 'Backrub.'",
  "Cleopatra was Greek, not Egyptian.",
  "The state of Florida is larger than England.",
  "Banging your head against a wall burns 150 calories per hour.",
  "A single strand of spaghetti is called a 'spaghetto.'",
  "A group of owls is called a 'parliament.'",
  "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
  "The longest word in the English language without a vowel is 'rhythms.'",
  "The human brain is more active during sleep than during the day while awake.",
  "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
  "The longest word in the English language without a vowel is 'rhythms.'",
  "The human brain is more active during sleep than during the day while awake.",
  "The world's largest desert is Antarctica.",
  "Hawaii is moving toward Japan at the rate of almost 4 inches per year.",
  "The longest time between two twins being born is 87 days.",
  "The moon has moonquakes.",
  "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
  "Bananas are berries, but strawberries are not.",
  "A day on Venus is longer than a year on Venus.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted for just 38 minutes.",
  "The Great Wall of China is not visible from space without aid.",
  "Cows have best friends and can become stressed when they are separated from them.",
  "Octopuses have three hearts.",
  "A group of flamingos is called a 'flamboyance.'",
  "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.",
  "Hippopotamus milk is pink.",
  "A day on Venus is longer than a year on Venus.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted for just 38 minutes.",
  "Bananas are berries, but strawberries are not.",
  "Honey never spoils. Archaeologists have even found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
];


const getFact = (facts) => {
  const randomNumber = Math.floor(Math.random() * facts.length);
  return facts[randomNumber];
};


document.getElementById("factButton").addEventListener("click", () => {
  const randomFact = getJoke(jokes);

  const factParagraph =  document.createElement("p");

  factParagraph.innerHTML = randomFact;
  factParagraph.classList.add("answer-text"); 

  factParagraph.style.marginLeft = '80px';
  
  const answerOutput = document.getElementById("answerOutput");

  answerOutput.appendChild(factParagraph);
});

