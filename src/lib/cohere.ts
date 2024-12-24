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
      message: `I\'ll give you a description of how I feel and I want you to give me a brief summarize of it, in a few words (5 words at max). For example, for the phrase: "I\'m feeling really good right now , with tons of energy!" You may just give me: "feeling excited". Or perhaps I can give you a more abstract phrase like: "I feel very dissapointed with my family, I think they don't understand me", then you can just give me: "dissapointment". The purpose of the output you give is to use it for searching a playlist on Spotify, so it should make sense. If the phrase I give you makes no sense (e.g. random letters/words like: "sdfdskfhk jdfsd"  or anything non-related to emotions: "The dog is white") just give the word "random" without ending point. \n\nNow here is the actual text I want you to analyze and give me the emotion/summary in a few words without a full stop (ending point): ${prompt}`,
    });

    const AIMessage = response.chatHistory as unknown as
      | actualMessage[]
      | undefined;

    return AIMessage ? AIMessage[1].message : 'random';
  })();
  return newMessage;
};
