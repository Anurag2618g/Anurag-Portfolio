import React from 'react'
import PROFILE_PIC from '../assets/images/image.png'
import { ABOUT_ME } from '../utils/data'

const AboutMe = () => {
  return (
    <section id="about" className='container mx-auto py-16 px-8'>
        <h4 className='block lg:hidden w-[200px] mb-16 section-title text-left'>About Me</h4>
        <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
            <div className='w-[300px] md:w-[300px] h-[350px] md:h-[350px] bg-orange-100/50 rounded-3xl mx-auto'>
                <img src={PROFILE_PIC} alt="Profile Pic" className='profile-pic w-[280px] md:w-[280px] h-[330px] md:h-[330px] x-auto hover:rotate-[0deg]' />
            </div>

            <div className='flex-1'>
                <h4 className='hidden lg:block w-[200px] section-title text-left'>About Me</h4>
                <p className='text-[17px] font-medium text-justify leading-6 whitespace-pre-line mt-4'>{ABOUT_ME.content}</p>
                <div className='flex mt-6 gap-4'>
                  {ABOUT_ME.socialLinks.map((item) => (
                    <a key={item.label} className='cursor-pointer group'>
                      <item.icon className='text-3xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-primary group-hover:translate-y-[2px]' />
                    </a>
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe