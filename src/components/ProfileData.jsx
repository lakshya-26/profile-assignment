import React from 'react'

const ProfileData = ({firstName, lastName, gender, phone, image}) => {
  return (
    <div className='w-[520px] h-[250px] Profile-card border-2 flex flex-nowrap items-center justify-center gap-[-100px] bg-[#ADE5F9] py-10 px-8 rounded-[10px] shadow-custom'>
        <div className='w-[8rem] min-w-[250px] -mr-20'>
          <img className='max-w-[70%] rounded-full shadow-custom-2' src={image} alt="" />
        </div>
        <div className='mr-16'>
          <div className='flex gap-2 mb-2'>
          <p className='text-2xl font-semibold capitalize'>{firstName}</p> 
          <p className='text-2xl font-semibold capitalize'>{lastName}</p>
          </div> 
          <p className='mb-2 font-medium capitalize'>{gender}</p>
          <p className='font-medium'>{phone}</p>
        </div>
      </div>
  )
}

export default ProfileData