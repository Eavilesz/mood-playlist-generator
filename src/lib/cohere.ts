'use server';

import { CohereClient } from 'cohere-ai';

interface actualMessage {
  role: string;
  message: string;
}

export const getMoodFromCohere = async (prompt: string): Promise<string> => {
  const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
  });
  const newMessage = (async () => {
    const response = await cohere.chat({
      model: 'command-r-plus',
      message: `I\'ll give you a description of how I feel and I want you to give me an emotion, just one word. For example, for the phrase: "I\'m feeling really good right now , with tons of energy!" You may just give me this string "excitement". If the phrase I give you makes no sense (e.g. random letters/words like : "sdfdskfhk jdfsd"  or anything non-related to emotions: "The dog is white") just give the word "random" without ending point. \n\nNow here is the actual text I want you to analyze and give me the emotion in just one word without a full stop (ending point): ${prompt}`,
    });

    const AIMessage = response.chatHistory as unknown as
      | actualMessage[]
      | undefined;

    return AIMessage ? AIMessage[1].message : 'random';
  })();
  return newMessage;
};
