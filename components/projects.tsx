"use client";
import React from 'react';
import ScrollButton4 from './scrollbutton4';
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    src: '/images/gunkii_sc.png',
    title: 'Gunkii Shopping Cart UI',
    description: 'A Shopping Cart UI',
    category: 'Co-op @ Gunkii',
    content: 'This work was one of the tickets I worked on when working at Gunkii.',
    videoURL: "/gunkii_shopping_cart_demo.mp4",
  },
  {
    src: '/images/current_portfolio.png',
    title: 'Current Portfolio Website',
    description: 'My current personal portfolio',
    category: 'Portfolio (Project)',
    content: 'Made using Typescript, Next JS, React, Tailwind CSS, and Aceternity UI. Displays projects, resume, socials.',
    repository: 'https://github.com/hahazz4/personal_portfolio_v2',
    website: 'https://zeerakasim.ca/'
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
    src: '/images/WeatherAppPic.png',
    title: 'Weather App',
    description: `A React Weather App`,
    category: 'Project',
    content: 'A React.js app that allows you to search a country or city, display its temperature and weather condition using the OpenWeatherMap API.',
    repository: 'https://github.com/hahazz4/WeatherApp',
    videoURL: "/weather_app_demo.mp4",
  },
  {
    src: '/images/FibonacciTermAlgoApp.png',
    title: 'Fibonacci Term App',
    description: `A Netbeans Java Fibonacci Term App`,
    category: 'Project',
    content: 'Programmed using Java. Finds the number when given the position of the term for Fibonacci algorithm.',
    repository: 'https://github.com/hahazz4/fibonacci_term_gui',
    videoURL: "/fibonacci_term_finder_demo.mp4",
  },
  {
    src: '/images/Todo List App.png',
    title: 'Todo List App',
    description: `A simple HTML,CSS,JS Todo List App`,
    category: 'Project',
    content: 'A simple todo list web app made with, HTML, CSS, Bootstrap and powered by JavaScript console.',
    repository: 'https://github.com/hahazz4/Todo-List',
    website: 'https://hahazz4.github.io/Todo-List/'
  },
  {
    src: '/images/experimenting portfolio mockup 2021.png',
    title: 'Portfolio Mockup (2021)',
    description: `A Portfolio Mockup (2021)`,
    category: 'Project',
    content: 'A portfolio prototype I had programmed as a beginner using HTML and CSS.',
    repository: 'https://github.com/hahazz4/Best_Website_I_Created',
    website: 'https://hahazz4.github.io/Best_Website_I_Created/'
  },
];

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));

const Projects = () => {
  return (
    <div className="mt-20">
      <h1 className="text-white text-center text-lg font-sm md:text-4xl">
        My Projects
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
