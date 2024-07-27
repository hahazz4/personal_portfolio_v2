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
    src: '/images/RecipeHuntAppPic.png',
    title: 'RecipeHunt App',
    description: 'Hack the 6ix Hackathon Project',
    category: 'Hackathon',
    content: 'A Hack the 6ix (hackathon) team project that allows users to find recipes based on the ingredients that they have at home. The application will provide a list of recipes that use those ingredients.',
    videoURL: "/recipehunt_app_hackathon_demo.mp4",
  },
  {
    src: '/images/CountryPediaAppPic.png',
    title: 'CountryPedia App',
    description: 'Hack the North Hackathon Project',
    category: 'Hackathon',
    content: 'A Hack the North (hackathon) team project that teaches and tests peoples knowledge of different country facts.',
    videoURL: "/countrypedia_app_demo.mp4",
  },
  {
    src: '/images/Temperature Sensor Prototype (Team 733-A).png',
    title: 'QHDT Sensor APSC 103 Project',
    description: `A hardware/software Project for Queen's Hyperloop Design Team`,
    category: 'Project',
    content: 'A visual presentation and programmed Arduino script for pressure transducer and temperature sensor.',
    videoURL: "/qhdt_year1project_demo.mp4",
  },
  {
    src: '/images/WeatherAppPic.png',
    title: 'Weather App',
    description: `A React Weather App`,
    category: 'Project',
    content: 'A React.js app that allows you to search a country or city, display its temperature and weather condition using the OpenWeatherMap API.',
    videoURL: "/weather_app_demo.mp4",
  },
  {
    src: '/images/FibonacciTermAlgoApp.png',
    title: 'Fibonacci Term App',
    description: `A Netbeans Java Fibonacci Term App`,
    category: 'Project',
    content: 'Programmed using Java. Finds the number when given the position of the term for Fibonacci algorithm.',
    videoURL: "/fibonacci_term_finder_demo.mp4",
  },
  {
    src: '/images/Todo List App.png',
    title: 'Todo List App',
    description: `A simple HTML,CSS,JS Todo List App`,
    category: 'Project',
    content: 'A simple todo list web app made with, HTML, CSS, Bootstrap and powered by JavaScript console.',
    // videoURL: "/fibonacci_term_finder_demo.mp4",
  },
  {
    src: '/images/experimenting portfolio mockup 2021.png',
    title: 'Portfolio Mockup (2021)',
    description: `A Portfolio Mockup (2021)`,
    category: 'Project',
    content: 'A portfolio prototype programmed using HTML and CSS.',
    // videoURL: "/fibonacci_term_finder_demo.mp4",
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
