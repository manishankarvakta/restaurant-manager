"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

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
// import { useProModal } from "@/hooks/use-pro-modal";

import { amountOptions, fromSchema, resolutionOptions } from "./constants";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Card, CardFooter } from "@/components/ui/card";

const ImagePage = () => {
  const router = useRouter();
  // const proModal = useProModal();

  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof fromSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);
      form.reset();
    } catch (error: any) {
      console.log(error);
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
        title="Image Generation"
        description="Generate Image using descriptive text."
        icon={ImageIcon}
        iconColor="text-pink-500"
        bgColor="bg-pink-500/10"
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
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        // placeholder={
                        //   placeHolder.length > 0
                        //     ? placeHolder
                        //     : "Start Conversation"
                        // }
                        placeholder="A piture of a horse in Swiss alps"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-sm  w-full  bg-black/5 px-4 py-3 rounded-md">
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-sm w-full bg-black/5 px-4 py-3 rounded-md">
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

          {images.length === 0 && !isLoading && (
            <Empty
              label="No Images Generated."
              icon={ImageIcon}
              iconColor="text-pink-500"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image fill alt="Generated" src={src} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    onClick={() => window.open(src)}
                    variant="secondary"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
