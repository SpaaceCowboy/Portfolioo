import React from "react";
import {Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'


function Head() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Shayan",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="flex items-center justify-center flex-col text-center 
        pt-20 pb-6
        ">
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 '>
            <span className='mr-3 mt-5'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>  
            <h2 className='text-base md:text-xl uppercase font-medium pb-2 tracking-[2px] mt-10 '>
                LET'S BUILD SOMETHING TOGETHER
            </h2>
            <p className="text-sm max-w-xl mb-6 font-bold text-left mt-5">
            I am a Full Stack Web Developer with almost 3 years of experience, specializing in{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            ReactJS.{' '}
            </span> 
            focused on web-technologies, backend services and Interface Design.
            <br />
            In addition, 
            I have worked on enterprise-level web projects for some of the Iranian companies, using{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            React{' '}
            </span> 
            and{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            Express.js.{' '}
            </span> 
            I have extensive experience in{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            HTML{' '}
            </span> 
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            CSS{' '}
            </span>
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            JavaScript,{' '}
            </span>
             and various open-source frameworks such as{' '}
             <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            Nodejs,{' '}
            </span>
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            MongoDB{' '}
            </span>
            and{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            Django.{' '}
            </span>
            <br />
            I also possess skills in writing complex{' '}
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            SQL{' '}
            </span>
            queries using popular database servers such as{' '} 
            <span 
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            MYSQL.{' '}
            </span>
            <br />
            In addition to my development work, 
            I am skilled in troubleshooting problems and resolving bugs within an existing system. 
            <br /> I enjoy having responsibility for tasks and working independently as well as in teams. 
            </p>
            <div className='flex items-center justify-center gap-10 max-w-[330px] m-auto '>

            <a
            href='https://www.linkedin.com/in/clint-briley-50056920a/'
            target='_blank'
            rel='noreferrer'
            >
            <div className='rounded-full shadow-lg bg-slate-400/10 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            </a>
            <a
            href='https://github.com/fireclint'
            target='_blank'
            rel='noreferrer'
            >
            <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
            </div>
            </a>
            <Link href='/#contact'>
            <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
            </div>
            </Link>
            <Link href='/resume'>
            <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Head;






