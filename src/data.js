// I used this as a store for the datas for FAQ and reviews.

import photo1 from "./assets/0-0.png";
import photo2 from "./assets/0-1.png";
import photo3 from "./assets/0-2.png";
import photo4 from "./assets/0-3.png";
import photo5 from "./assets/0-4.png";
import photo6 from "./assets/0-5.png";
import photo7 from "./assets/0-6.png";
import photo8 from "./assets/1-0.png";
import photo9 from "./assets/1-1.png";
import photo10 from "./assets/1-2.png";
import photo11 from "./assets/1-3.png";
import photo12 from "./assets/1-4.png";
import photo13 from "./assets/1-5.png";
import photo14 from "./assets/1-6.png";

export const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "Well done on the launch 🚀 . I am convinced you will have many signs up today because your tool is beneficial. I love the UI. The framework between Afforai Build and Afforai Ask is compelling. I am in a hurry now to train my new assistant 😁",
    image: photo1,
  },

  {
    id: 2,
    author: "Jane Smith",
    content:
      "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
    image: photo2,
  },
  {
    id: 3,
    author: "Jane Smith",
    content:
      "I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!.",
    image: photo3,
  },
  {
    id: 4,
    author: "Jane Smith",
    content:
      "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:).",
    image: photo4,
  },
  {
    id: 5,
    author: "Jane Smith",
    content:
      "This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch. ",
    image: photo5,
  },
  {
    id: 6,
    author: "Jane Smith",
    content:
      "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
    image: photo6,
  },
  {
    id: 7,
    author: "Jane Smith",
    content:
      "Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product.",
    image: photo7,
  },
];

export const comments = [
  {
    id: 1,
    author: "John Doe",
    content:
      "Well done on the launch 🚀 . I am convinced you will have many signs up today because your tool is beneficial. I love the UI. The framework between Afforai Build and Afforai Ask is compelling. I am in a hurry now to train my new assistant 😁",
    image: photo8,
  },

  {
    id: 2,
    author: "Jane Smith",
    content:
      "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
    image: photo9,
  },
  {
    id: 3,
    author: "Jane Smith",
    content:
      "I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!.",
    image: photo10,
  },
  {
    id: 4,
    author: "Jane Smith",
    content:
      "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:).",
    image: photo11,
  },
  {
    id: 5,
    author: "Jane Smith",
    content:
      "This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch. ",
    image: photo12,
  },
  {
    id: 6,
    author: "Jane Smith",
    content:
      "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
    image: photo13,
  },
  {
    id: 7,
    author: "Jane Smith",
    content:
      "Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product.",
    image: photo14,
  },
];

export const faqData = [
  {
    id: "1",

    questions: "Is Afforai free?",
    answers:
      "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
  },

  {
    id: "2",
    questions: "What are subscription credits versus permanent credits?",
    answers:
      "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
  },

  {
    id: "3",
    questions:
      "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
    answers:
      "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
  },

  {
    id: "4",
    questions: "Does Afforai support uploading images and video?",
    answers:
      "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
  },

  {
    id: "5",
    questions: "Does Afforai support collaboration between accounts?",
    answers:
      "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
  },
  {
    id: "6",
    questions: "Is my data secured?",
    answers:
      "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
  },
];
