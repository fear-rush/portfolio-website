import React from 'react'
import profile from '../img/profile.png'
import {FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Card = () => {
  return (
    <div className = 'w-full'>
      <div className = 'overflow-hidden flex flex-col justify-center mt-4 sm:mt-10 max-w-md mx-auto bg-white shadow-2xl rounded-lg p-9'>
        <div className=''>
          <img className='w-32 mx-auto' src={profile} alt='profile'></img>
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
            Muhammad Firas Zahid Suryaatmaja
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            Web Developer
          </p>


          <div className='flex align-center justify-center mt-4'>

            <SocialMediaIcon icon={<FaGithub color='black'/>} name='Github' link='https://github.com/fear-rush'/>
            <SocialMediaIcon icon={<FaLinkedin color='#0077b5'/>} name='LinkedIn' link='https://www.linkedin.com/in/muhammadfiras/'/>
            <SocialMediaIcon icon={<FaTwitter color='#00a0dc'/>} name='Twitter' link='https://twitter.com/muhfiras1'/>
            <SocialMediaIcon icon={<FaInstagram color='#bc2a8d'/>} name='Instagram' link='https://instagram.com/muhfiras_'/>

          </div>


        </div>

      </div>
    </div>
  )
}

  const SocialMediaIcon = ({ icon, name, link }) => (
    <a className='text-2xl m-1 p-1  transform hover:scale-150 transition-all' href={link}> 
        {icon}
      <span className='sr-only'>{name}</span>
    </a>
  );

export default Card;
