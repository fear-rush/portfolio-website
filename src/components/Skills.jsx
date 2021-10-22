import React from "react"
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
      <p className='text-2xl text-black sm:text-4xl text-center font-bold pt-4'>
        Tech Stack <span>📚</span>
      </p>
      <div className='flex flex-wrap justify-center pt-2'>
          <TechStack icon={<FaHtml5 color='#f06529' size='38' className='mx-auto'/>} name='HTML'/>
          <TechStack icon={<FaCss3 color='#2965f1' size='38' className='mx-auto'/>} name='CSS'/>
          <TechStack icon={<SiJavascript color='#f0db4f' size='38' className='mx-auto'/>} name='Javascript'/>
          <TechStack icon={<FaReact color='#61DBFB' size='38' className='mx-auto'/>} name='React'/>
          <TechStack icon={<SiTailwindcss color='#60a5fa ' size='38' className='mx-auto'/>} name='Tailwind'/>
      </div>
    </div>
  )
}

const TechStack = ({ icon, name}) => (
  <div className='text-center flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
    {icon}
    <p className='mt-6 text-sm sm:text-2xl font-semibold text-center'>{name}</p>
  </div>
);

export default Skills
