import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-100 text-sm text-secondary text-center p-5'>
        ©{new Date().getFullYear()}Anurag Gupta. All rights reserved.
    </div>
  )
}

export default Footer