import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import{BsFillMoonStarsFill} from 'react-icons/bs'
import { BiMenu } from "react-icons/bi";
import { FiSearch } from 'react-icons/fi';
import { FaBeer } from 'react-icons/fa';
import { useEffect, useState } from 'react';


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

          

          <nav class = "py-5 mb-12 fixed top-0 left-0 right-0 w-full p-7 bg-stone-50">
            <ul id="navbar" class = "flex items-center justify-between">
                <h1 className="text-xl mr-auto">Randy Chu</h1>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Bio</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Skills</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Projects</a></li>
                <li><a href="#" class = "hidden md:flex pl-4 pr-4 hover:text-gray-400">Contact Me</a></li>
                <li><a href="#" class = "p-4 rounded-full mr-4 hover:text-gray-400">Resume</a></li>
                <li><a href="#" class = ""><BsFillMoonStarsFill style={{ color: 'white' }} class="bg-violet-600 hover:bg-violet-400 w-10 h-10 mr-2 p-3 rounded-md" /></a></li>
                <li><a id="hamburger" href="#" class = "md:hidden" ><BiMenu style={{ fontSize: '40px' }} className= " hover:bg-neutral-300 rounded-md"/></a></li>
            </ul>
            </nav>

        </section>
    
      </main>
    </>
  )
}
