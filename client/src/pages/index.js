import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import{BsFillMoonStarsFill} from 'react-icons/bs'
import { BiMenu } from "react-icons/bi";
import { FiSearch } from 'react-icons/fi';
import { FaBeer } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin} from "react-icons/ai";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className = "bg-white px-10">



        <section className="min-h-screen">

          <nav class = "py-5 mb-12 fixed top-0 left-0 right-0 w-full p-7 bg-stone-50" style={{ backdropFilter: 'blur(10px)' }}>
            <ul id="navbar" class = "flex items-center justify-between">
                <h2 className="text-2xl mr-auto">Randy Chu</h2>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Bio</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Skills</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Projects</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Contact Me</a></li>
                <li><a href="#" class = "p-4 rounded-full mr-4 hover:text-gray-400">Resume</a></li>
                <li><a href="#" class = ""><BsFillMoonStarsFill style={{ color: 'white' }} class="bg-violet-600 hover:bg-violet-800 w-10 h-10 mr-2 p-3 rounded-md" /></a></li>
                <li><a id="hamburger" href="#" class = "md:hidden" ><BiMenu style={{ fontSize: '40px' }} className= " hover:bg-neutral-300 rounded-md"/></a></li>
            </ul>
            </nav>

            <div class="flex flex-col-reverse mt-56 md:flex-row space-evenly">
              <div className='icons mt-4 flex justify-center md:mt-0 md:flex-col md:w-56'><GoMarkGithub className='m-2 w-7 h-7'/> <AiFillLinkedin className='m-2 w-7 h-7'/> </div>
              
              <div className='w-full text-center md:text-left mt-auto md:mt-8'>
              <h1 className='text-4xl'>Randy Chu</h1>
              <h3 className = "mt-1 text-gray-500">Software Developer / Soldier / Designer </h3>
              <h3 className = "mt-4">High level experience in web development and web design, high level of knowledge in all computer science related tasks </h3>
              <button className='bg-violet-600 hover:bg-violet-800 p-3 mt-8 rounded-md text-white'>Contact Me</button>
              </div>

              <div className='w-full text-center flex justify-center mb-10 md:mb-0 '> <img src="/images/grid_0.png" class= "w-56 md:w-80" alt="Example" /></div>

              </div>



        </section>

        <section className ="min-h-screen">
  
        </section>
    
      </main>
    </>
  )
}
