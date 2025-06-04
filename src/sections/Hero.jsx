import React from 'react';
import ICON from '../assets/images/Icon.png';

const Hero = () => {
  return (
    <section id='hero' className='container px-8 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-16 items-center justify-between mt-[80px]'>
        <div className='order-2 text-center lg:order-1 lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-2xl lg:text-4xl  text-black font-bold'>👋Hi I'm Anurag</h3>
          <h1 className="w-full lg:w-[700px] text-5xl lg:text-6xl font-bold leading-[50px] lg:leading-[60px] mt-5 bg-gradient-primary bg-clip-text text-transparent">Building Scalable And User Centric Web Apps</h1>

          <p className='w-full lg:w-[550px] mt-6 text-sm lg:text-xl'>
            I'm a passionate Web Developer crafting responsive, accessible, and dynamic web experiences
            using MERN stack.
          </p>

          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim'>View My Work</button>
            <button className='flex-1 md:flex-none btn-outline btn-scale-anim'>Download Resume</button>
          </div>
        </div>
        <div className='flex items-center justify-center lg:mr-[200px] w-[350px] md:w-[420px] h-[400px] md:h-[478px] bg-orange-100/50 rounded-3xl order-1 lg:order-2'>
          <img src={ICON} alt="PROFILE_PIC" className='profile-pic' />
        </div>
      </div>

      {/* <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {STATS.map((item) => (
          <StatsInfoCard key={item.id} label={item.label} count={item.count} />
        ))}
      </div> */}
    </section>
  )
}

export default Hero