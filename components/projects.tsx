"use client";
import React from 'react';
import ScrollButton4 from './scrollbutton4';
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { caveat } from '@/app/fonts';

const data = [
  {
    src: '/images/FlashcardGenProject.png',
    title: 'Flashcard-Gen',
    description: 'Study Cards Generator',
    category: 'Project',
    content: 'Designed a flashcard app using Next.js, Tailwind CSS, Material UI, and JavaScript, with the back-end as Node.js, and LLM integration through the Gemini API.',
    repository: 'https://github.com/hahazz4/ai_flashcard',
    website: 'https://ai-flashcard-rosy.vercel.app/',
    videoURL: "/FlashcardGenProject.mov",
  },
  {
    src: '/images/ai-olympic-project.png',
    title: 'AI Olympic Bot',
    description: 'Chatbot For Olympics',
    category: 'Project',
    content: 'Developed an AI bot that answers Olympic FAQS using Next.js, Material UI, JavaScript, and integrated LLM using the Gemini API',
    repository: 'https://github.com/hahazz4/ai_supp_bot',
    website: 'http://ai-supp-bot.vercel.app/',
    videoURL: "/olympic-bot.mp4",
  },
  // what they doin myan? client-side error? ;-;
  // {
  //   src: '/images/headstarter_img.png',
  //   title: 'Headstarter AI Projects Portfolio',
  //   description: 'Headstarter Portfolio with 4+ Project Submissions',
  //   category: 'Fellowship @ Headstarter',
  //   content: `Built 4+ applications with AI using Next js, Tailwind CSS, Material UI, Node.js, TypeScript, JavaScript.
  //   Incorporated LLM integration with methods like RAG, APIs like Gemini, OpenAI API, and much more...`,
  //   website: 'https://app.theheadstarter.com/profile/zeerakasim'
  // },
  {
    src: '/images/gunkii_sc.png',
    title: 'Gunkii Shopping Cart UI',
    description: 'A Shopping Cart UI',
    category: 'Co-op @ Gunkii',
    content: 'This work was one of the tickets I worked on when working at Gunkii.',
    videoURL: "/gunkii_shopping_cart_demo.mp4",
  },
  {
      src: '/images/memory_alloc_project.png',
      title: 'Memory Allocator',
      description: `A Memory Allocator in C++`,
      category: 'Project',
      content: 'A memory allocator simulator that was made to mimic and display the behaviour of allocating and de-allocating blocks of memory (malloc(), free()).',
      repository: 'https://github.com/hahazz4/Memory-Allocator-Simulation',
  },
  {
    src: '/images/RecipeHuntAppPic.png',
    title: 'RecipeHunt App',
    description: 'Hack the 6ix Hackathon Project',
    category: 'Hackathon',
    content: 'A Hack the 6ix (hackathon) team project that allows users to find recipes based on the ingredients that they have at home. The application will provide a list of recipes that use those ingredients.',
    repository: 'https://github.com/Nickysterling/hack-the-6ix',
    videoURL: "/recipehunt_app_hackathon_demo.mp4",
  },
  {
    src: '/images/CountryPediaAppPic.png',
    title: 'CountryPedia App',
    description: 'Hack the North Hackathon Project',
    category: 'Hackathon',
    content: 'A Hack the North (hackathon) team project that teaches and tests peoples knowledge of different country facts.',
    repository: 'https://github.com/CipherDoc34/Hack-the-north',
    videoURL: "/countrypedia_app_demo.mp4",
  },
  {
    src: '/images/Temperature Sensor Prototype (Team 733-A).png',
    title: 'QHDT Sensor APSC 103 Project',
    description: `A hardware/software Project for Queen's Hyperloop Design Team`,
    category: 'Project',
    content: 'A visual presentation and programmed Arduino script for pressure transducer and temperature sensor.',
    repository: 'https://github.com/hahazz4/qhdt_sensors',
    videoURL: "/qhdt_year1project_demo.mp4",
  },
  {
    src: '/images/old_portfolio.png',
    title: 'Old Portfolio Website (2022-2024)',
    description: 'My old personal portfolio',
    category: 'Portfolio (Project)',
    content: 'Made using HTML, CSS, Bootstrap, and Javascript. Displays my reusme, who I am, my projects, and my socials.',
    repository: 'https://github.com/hahazz4/My_Personal_Portfolio',
    website: 'https://hahazz4.github.io/My_Personal_Portfolio/'
  },
];

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));

const Projects = () => {
  return (
    <div className="justify-center items-center mt-20">
      <h1 className="text-white text-center text-3xl font-sm md:text-5xl">
        <span className={caveat.className}>My Projects</span>
      </h1>

      <div className="w-full h-full pt-0 py-10">
        <Carousel items={cards} />
      </div>

      <div className="mt-0">
        <ScrollButton4 />
      </div>
    </div>
  );
}

export default Projects;
