
export const getStoredData = () => {
  const storedData = localStorage.getItem("storedData");
  return storedData ? JSON.parse(storedData) : [];
};

export const setStoredData = (data) => {
  localStorage.setItem("storedData", JSON.stringify(data));
};

export const addData = (type, text) => {
  const storedData = getStoredData();
  const newItem = { type, text, timestamp: new Date().toISOString() };
  storedData.push(newItem);
  setStoredData(storedData);
};

export const clearStoredData = () => {
  localStorage.removeItem("storedData");
};

export const displayStoredData = () => {
  const storedData = getStoredData();
  const answerOutput = document.getElementById("answerOutput");

  storedData.forEach((item) => {
    const paragraph = document.createElement("p");

    
    if (item.type === "Question") {
      paragraph.classList.add("question-text");
    } else {
      paragraph.classList.add("textBox");
    }

    paragraph.textContent = `${item.text}`;
    answerOutput.appendChild(paragraph);
  });
};
