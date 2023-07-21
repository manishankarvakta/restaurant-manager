"use client";

import * as z from "zod";
import axios from "axios";
import { MessageSquare, MessageSquareDashed } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { fromSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof fromSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6);
  };
  // PlaceHolders
  const placeholderObjects = [
    {
      id: 1,
      status: "active",
      text: "I'm ready to grant your wishes! Type away, mastermind.",
    },
    {
      id: 2,
      status: "active",
      text: "Feed me your burning questions, and I shall respond with boundless knowledge.",
    },
    {
      id: 3,
      status: "active",
      text: "Prepare for a mind-bending conversation. Start typing, if you dare!",
    },
    {
      id: 4,
      status: "active",
      text: "Ask me anything your heart desires, and I'll do my best to amaze you.",
    },
    {
      id: 5,
      status: "active",
      text: "Welcome to the realm of infinite wisdom. What's on your mind today?",
    },
    {
      id: 6,
      status: "active",
      text: "Type here, mortal, and witness the power of my digital intellect.",
    },
    {
      id: 7,
      status: "active",
      text: "I'm all ears (or rather, pixels). What mysteries shall we unravel today?",
    },
    {
      id: 8,
      status: "active",
      text: "Enter your queries here, and let's embark on an adventure of enlightenment.",
    },
    {
      id: 9,
      status: "active",
      text: "Words hold no secrets from me. Reveal your thoughts and let's converse!",
    },
    {
      id: 10,
      status: "active",
      text: "Type, and together we shall dance the intricate waltz of knowledge.",
    },
  ];

  let placeIndex = getRandomNumber();
  let placeHolder: string = placeholderObjects[placeIndex].text;
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        // placeholder={
                        //   placeHolder.length > 0
                        //     ? placeHolder
                        //     : "Start Conversation"
                        // }
                        placeholder="Start Conversation"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty
              label="No conversation started."
              icon={MessageSquareDashed}
              iconColor="text-violet-500"
            />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages
              .sort((a: any, b: any) => a - b)
              .map((message) => (
                <div
                  key={message.content}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "user"
                      ? "bg-white border border-black/10"
                      : "bg-muted"
                  )}
                >
                  {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <p className="text-sm">{message.content}</p>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
