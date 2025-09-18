
'use server';

import { chat } from '@/ai/flows/chatbot-flow';
import { z } from 'zod';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message'),
});

type ChatState = {
    messages: { role: 'user' | 'bot'; content: string }[];
    error?: string | null;
};

export async function sendMessageAction(prevState: ChatState, formData: FormData): Promise<ChatState> {
  const validatedFields = ChatInputSchema.safeParse({
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
        ...prevState,
        error: 'Invalid message. Please try again.',
    };
  }

  const userMessage = { role: 'user' as const, content: validatedFields.data.message };
  const newMessages = [...prevState.messages, userMessage];

  try {
    const { message: botResponse } = await chat(validatedFields.data);
    const botMessage = { role: 'bot' as const, content: botResponse };
    return {
        messages: [...newMessages, botMessage],
        error: null,
    };
  } catch (e) {
    console.error(e);
     return {
        ...prevState,
        error: 'Something went wrong. Please try again later.',
    };
  }
}
