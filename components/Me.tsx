'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollButton2 from './scrollbutton2';
import { FlipWords } from './ui/flip-words';

const Me = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const words = [
        "I am a New Computer Engineering Graduate",
        "Born in Melbourne, Australia",
        "I am passionate about Software Engineering",
        "I am passionate about AI",
        "I love to play videogames",
        "I love playing basketball, badminton, volleyball, soccer",
    ];

    useEffect(() => {
        const handleScroll = () => {
            const introSection = document.getElementById('intro');
            if (introSection) {
                const introBottom = introSection.getBoundingClientRect().bottom;
                if (introBottom < 0) {
                    setShowNavBar(true);
                } else {
                    setShowNavBar(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/*
            {showNavBar && (
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                            <HoveredLink href="#welcome">Home</HoveredLink>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="About Me">
                            <HoveredLink href="#me">About Me</HoveredLink>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Resume">
                            <HoveredLink href="#resume">Resume</HoveredLink>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Projects">
                            <HoveredLink href="#projects">Projects</HoveredLink>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Socials">
                            <HoveredLink href="#socials">Socials</HoveredLink>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Contact Me">
                            <HoveredLink href="#contact">Contact</HoveredLink>
                        </MenuItem>
                    </Menu>
                </div>
            )}
            */}
            <div id="intro" className="flex flex-col justify-center items-center mt-20">
                <div id="pfp" className="text-center mb-10">
                    <Image 
                    src="/images/zeerak_pfp.png"
                    alt="Picture of Zeerak in a suit"
                    width={300}
                    height={300}
                    className="rounded-full aspect-square object-cover"/>
                </div>
                <div id="text-box" className="text-center">
                    <h2 className="text-white text-center text-md md:text-3xl">
                        <b>My Name is Zeerak</b>
                    </h2>
                    <h5 className="text-white text-center text-sm md:text-md lg:text-lg">
                        <FlipWords words={words}/>
                    </h5>
                    <div className="mt-10"><ScrollButton2 /></div>
                </div>
            </div>

        </>
    );
}

export default Me;
