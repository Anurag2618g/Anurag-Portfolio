import React from 'react'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoMdMail } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import { IoPhonePortraitOutline } from 'react-icons/io5'

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[vw] mx-auto'>
          <h4 className='section-title'>Contact Me</h4>

          <p className='text-base text-center mt-4 leading-6'>
            A versatile developer with hands-on expertise in modern technologies , tools, and frameworks, dedicated to building 
            efficient, scalable, and user-centric solutions. 
          </p>
        </div>

        <div className='grid grid-col-1 md:grid-cols-2 md:gap-16 gap-10 mt-16'>
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
          </div>

          <div>
            <h5 className='md:hidden text-secondary text-lg font-medium mt-4 pb-5'>Contact Form</h5>
            <form className='flex flex-col'>
              <input 
                className='input-box'
                id=''
                type="text"
                name='fullname'
                placeholder='Full Name'
                autoComplete='off'
              />
              <input 
                className='input-box'
                id=''
                type="text"
                name='email'
                placeholder='Email'
                autoComplete='off'
              />
              <textarea 
                className='input-box'
                id=''
                type="text"
                name='message'
                rows={3}
                placeholder='Message'
                autoComplete='off'
              />
              <button className='btn-outline btn-scale-anim'>Submit</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactMe