import React from 'react'

const SkillCard = ({icon, skillName}) => {
  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-4 transition-transform ease-in-out duration-300 hover:scale-110'>
      <div className='flex flex-col items-center justify-center gap-3'>

        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>{icon}</div> 

        <div className='flex items-center justify-between'>
          <p className='text-[17px] text-black font-medium'>{skillName}</p>
        </div>

      </div>
      {/* <p className='text-sm leading-5 mt-2 text-gray-600 text-justify'>{description}</p> */}
    </div>
  )
}

export default SkillCard;