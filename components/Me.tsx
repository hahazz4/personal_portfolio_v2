'use client';
import Image from 'next/image';
import ScrollButton2 from './scrollbutton2';
import { FlipWords } from './ui/flip-words';
import { caveat, roboto } from '@/app/fonts';

const Me = () => {
    const words = [
        "I am a Recent Computer Engineering Graduate",
        "Born in Melbourne, Australia",
        "I am passionate about Software Engineering",
        "I am passionate about AI",
        "I love to play videogames",
        "I love playing basketball, badminton, volleyball, soccer",
    ];

    return (
        <div id="intro" className="flex flex-col justify-center items-center mt-20">
            <div id="pfp" className="text-center mb-10">
                <Image 
                src="/images/zee_suit_img2.jpg"
                alt="Picture of Zeerak Asim in a suit"
                width={300}
                height={300}
                className="rounded-full aspect-square object-cover"/>
            </div>
            <div id="text-box" className="text-center">
                <h2 className="text-white text-center text-3xl md:text-4xl">
                    <span className={caveat.className}><b>Zeerak Asim</b></span>
                </h2>
                <h5 className="text-white text-center text-md px-5 md:text-lg lg:text-xl">
                    <FlipWords className={roboto.className} words={words}/>
                </h5>
                <div className="mt-10"><ScrollButton2 /></div>
            </div>
        </div>
    );
}

export default Me;
