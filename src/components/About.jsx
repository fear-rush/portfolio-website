import React from 'react'
import scrollIntoView from 'scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const About = () => {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
      <p className='text-2xl text-black md:text-4xl font-bold text-center'>
        Hello 👋
      </p>
      <p className='text-base md:text-2xl text-center text-gray-600 leading-relaxed mt-4'>
        I'm a web developer, mostly worked on front-end developer and currently im studying devops tech stack like docker, nginx and kubernetes.
      </p>

      <scrollIntoView selector="">
        <div className='mx-auto p-20'>
          <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'/>
        </div>
      </scrollIntoView>

    </div>
  )
}

export default About
