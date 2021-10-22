import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const About = () => {

  const onContentClick = (value) => {
    const element = document.getElementById('tech');
    element.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div className='max-w-4xl mt-20 mx-auto'>
      <p className='text-2xl text-black md:text-4xl font-bold text-center'>
        Hello <span>👋</span>
      </p>
      <p className='text-base md:text-2xl text-center text-gray-600 leading-relaxed mt-4'>
        I'm a web developer, mostly worked on front-end developer and currently im studying devops tech stack like docker, nginx and kubernetes.
      </p>

        <div className='mx-auto p-20 my-12'>
          <FaChevronDown onClick={onContentClick} className='animate-bounce mx-auto text-3xl text-blue-500'/>
        </div>

    </div>
  )
}

export default About
