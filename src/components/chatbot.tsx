
'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { sendMessageAction } from '@/app/actions/chatbot-actions';
import Image from 'next/image';
import { X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';

const MessageSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const initialMessages = [
    {
        role: 'bot' as const,
        content: "Hello 👋 Welcome to Qirrus!\nHow can we help you today?",
    },
];

const quickReplies = [
    "I'm new and I am curious to learn more",
    "I'm a Qirrus user and need support.",
    "I'd rather keep browsing around, thanks :)",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const initialState = { messages: initialMessages, error: null };
  const [state, formAction] = useFormState(sendMessageAction, initialState);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    if (state.messages.length > initialMessages.length) {
       setFormKey(prev => prev + 1); // Reset form
    }
  }, [state.messages]);

  const handleQuickReply = (reply: string) => {
    if (formRef.current && inputRef.current) {
      inputRef.current.value = reply;
      formRef.current.requestSubmit();
    }
  };


  return (
    <>
      <div className={cn("fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out", { 'translate-y-24 scale-0': isOpen, 'translate-y-0 scale-100': !isOpen })}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquareIcon className="h-8 w-8 text-white" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">1</span>
        </Button>
      </div>

      <div className={cn("fixed bottom-0 right-0 z-50 w-full max-w-sm h-full md:h-auto md:max-h-[85vh] transition-transform duration-300 ease-in-out", { 'translate-y-full md:translate-y-0 md:translate-x-full': !isOpen, 'translate-y-0 md:translate-x-0': isOpen })}>
        <Card className="flex flex-col h-full rounded-b-none md:rounded-lg shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between bg-gray-100 dark:bg-gray-800 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Company%20logo%2FqirrusNew_Nov%202023-11.png?alt=media&token=45dbe27d-c236-43c2-907e-11a6d1e87060" alt="Qirrus Logo" width={40} height={40} className="rounded-full bg-white p-1" />
              </div>
              <div>
                <p className="font-semibold">Qirrus Bot</p>
                <p className="text-xs text-muted-foreground">Typically replies instantly</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {state.messages.map((message, index) => (
              <div key={index} className={cn("flex items-start gap-3", { "justify-end": message.role === 'user' })}>
                {message.role === 'bot' && <Bot className="h-6 w-6 text-primary" />}
                <div
                  className={cn("rounded-lg px-3 py-2 max-w-[80%] whitespace-pre-wrap", {
                    'bg-muted': message.role === 'bot',
                    'bg-primary text-primary-foreground': message.role === 'user',
                  })}
                >
                  {message.content}
                </div>
                {message.role === 'user' && <User className="h-6 w-6 text-muted-foreground" />}
              </div>
            ))}
             {state.messages.length === 1 && (
                <div className="space-y-2 pt-4">
                    {quickReplies.map((reply, index) => (
                        <Button key={index} variant="outline" className="w-full justify-start h-auto py-2" onClick={() => handleQuickReply(reply)}>
                           {reply}
                        </Button>
                    ))}
                </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form key={formKey} ref={formRef} action={formAction} className="flex w-full items-center gap-2">
              <Textarea
                ref={inputRef}
                name="message"
                placeholder="Type your message..."
                className="flex-1 resize-none"
                rows={1}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        formRef.current?.requestSubmit();
                    }
                }}
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
