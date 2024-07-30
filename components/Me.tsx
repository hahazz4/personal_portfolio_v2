'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollButton2 from './scrollbutton2';
// import { Menu, MenuItem, HoveredLink } from '@/components/ui/navbar-menu';

const Me = () => {
    const [showNavBar, setShowNavBar] = useState(false);

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
            <div id="intro" className="flex justify-center items-center mt-20">
                <div id="pfp" className="ml-20">
                    <Image 
                        src="/images/zeerak_pfp.png"
                        alt="Picture of Zeerak in a suit"
                        width={300}
                        height={300}
                        className="rounded-full aspect-square object-cover"
                    />
                </div>
                <div id="text-box"className="pl-20 pr-20">
                    <h1 className="text-white text-center text-lg font-sm md:text-4xl">
                        My Name is Zeerak.
                    </h1>
                    <p className="text-white text-center text-lg md:text-xl lg:text-xl">
                        I am a Recent Computer Engineering Graduate
                    </p>
                    <div className="mt-10">
                        <ScrollButton2 />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Me;
