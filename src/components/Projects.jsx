import React from 'react'
import forkify from '../img/forkify.png'
import budgety from '../img/budgety.png'
import dice from '../img/dice.png'
import awarding from '../img/awarding.png'
import monaco from '../img/monaco.png'
import webinar from '../img/webinar.png'
import { FaGithub,FaGoogleDrive} from 'react-icons/fa'



const Projects = () => {
  return (
    
    <div className='max-w-4xl mx-auto justify-center py-12'>
       <p className='text-2xl text-black sm:text-4xl text-center font-bold pt-4'>
        Recent Works <span>💻</span>
      </p> 
      <div className='flex flex-wrap place-items-center mt-12'>

        {/* Forkify */}
        <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto mb-20'>
          <img src={forkify} alt="Forkify" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              Forkify
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Manage and search your recipe in easy way
            </p>
            <p className='text-gray-600 font-light text-md'>
              Some simple web app that made with plain html, css, javascript and fetch api with external source in spoonacular api
            </p>
            
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                HTML
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                CSS
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                JS
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                Webpack
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                Babel
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://github.com/fear-rush/forkify">
                <FaGithub size='28'/>  
              </a>
            </div>
          </div>
        </div>

        {/* Budgety */}
        <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto mb-20'>
          <img src={budgety} alt="Budgety" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              Budgety
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Manage your daily income and expenses
            </p>
            <p className='text-gray-600 font-light text-md'>
             Simple web app to calculate daily income and expenses. Made with plain HTML, CSS, Javascript
            </p>
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                HTML
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                CSS
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                JS
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://github.com/fear-rush/Budgety">
                <FaGithub size='28'/>  
              </a>
            </div>
          </div>
        </div>

        {/* Dice Games */}
        <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto mb-20'>
          <img src={dice} alt="Budgety" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              Dice Games
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Easy to play dice games
            </p>
            <p className='text-gray-600 font-light text-md'>
             Simple multiplayer dice game. Made with HTML, CSS, Javascript
            </p>
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                HTML
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                CSS
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                JS
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://github.com/fear-rush/dicegame">
                <FaGithub size='28'/>  
              </a>
            </div>
          </div>
        </div>

           {/* Webinar */}
           <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto mb-20 '>
          <img src={webinar} alt="Budgety" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              Technocorner Project
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Motion Graphic Video Project
            </p>
            <p className='text-gray-600 font-light text-md'>
              Motion graphic video webinar opener for Technocorner Event
            </p>
           
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                After Effect
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                Premiere Pro
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://drive.google.com/drive/folders/1-zyVetakrd3N0Kst26yII_HhYPQjNd4B?usp=sharing">
                <FaGoogleDrive size='28'/>  
              </a>
            </div>
          </div>
        </div>


        {/* Awarding */}
        <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto'>
          <img src={awarding} alt="Budgety" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              Agadaveda Awarding
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Motion Graphic Video Project
            </p>
            <p className='text-gray-600 font-light text-md'>
              Commisioned project from Fadeo Party event planner.
            </p>
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                After Effect
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                Premiere Pro
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://drive.google.com/drive/folders/1-zyVetakrd3N0Kst26yII_HhYPQjNd4B?usp=sharing">
                <FaGoogleDrive size='28'/>  
              </a>
            </div>
          </div>
        </div>


        {/* Monaco */}
        <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-auto'>
          <img src={monaco} alt="Budgety" className='max-h-40 w-full object-cover' />
          <div className='bg-white w-full p-4'>
            <p className='text-indigo-500 text-2xl font-medium'>
              MONACO Project
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              Motion Graphic Video Project
            </p>
            <p className='text-gray-600 font-light text-md'>
              Motion graphic video opener Moehi National Competition
            </p>
            {/* TAG */}
            <div className='flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium'>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                After Effect
              </span>
              <span className='m-1 px-2 py-1 rounded bg-indigo-500'>
                Premiere Pro
              </span>
            </div>
            <div className='flex justify-center text-center mx-auto my-2'>
              <a href="https://drive.google.com/drive/folders/1-zyVetakrd3N0Kst26yII_HhYPQjNd4B?usp=sharing">
                <FaGoogleDrive size='28'/>  
              </a>
            </div>
          </div>
        </div>


     
      </div>

    </div>

  )
}

export default Projects
