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
  },
  {
    src: '/images/project2.png',
    title: 'RecipeHunt App',
    description: 'Hack the 6ix Hackathon Project',
    category: 'Hackathon',
    content: 'A Hack the 6ix (hackathon) team project that allows users to find recipes based on the ingredients that they have at home. The application will provide a list of recipes that use those ingredients.',
  },
  {
    src: '/images/project3.png',
    title: 'Project 3',
    description: 'Description of Project 3',
    category: 'Category 3',
    content: 'Detailed content for Project 3',
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

      <div className="w-full h-full py-10">
        <Carousel items={cards} />
      </div>

      <div className="mt-10">
        <ScrollButton4 />
      </div>
    </div>
  );
}

export default Projects;
