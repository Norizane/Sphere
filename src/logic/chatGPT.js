const axios = require("axios");
import { key } from '../../key';


export let chatResponse = '';

export const createOpenAIAxiosClient = () => {
  const apiKey = key;

  const client = axios.create({
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });

  return client;
};

export const sendMessage = (userQuestion) => {
  const openAIAxios = createOpenAIAxiosClient();

  const params = {
    messages: [
      { role: "system", content: "you are the all-seeing eye.ś" },
      { role: "user", content: userQuestion },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 100,
    temperature: 0,
  };

  
  return openAIAxios.post("https://api.openai.com/v1/chat/completions", params)
    .then((results) => {
      const chatResponse = results.data.choices[0]?.message.content;


    
      return chatResponse;
    })
    .catch((err) => {
      console.error(err);
    });
};

