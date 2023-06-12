import React from 'react'

const Class = ({name, description, image}) => {

    const overlay = `p-5 absolute z-30 
    flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white font-semibold opacity-0 transition duration-500 ease-in-out hover:opacity-90`;
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
        <div className={overlay}>
            <p className='text-2xl'>{name}</p>
            <p className='mt-5'>{description}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class