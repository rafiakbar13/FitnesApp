import React from 'react'
import Logo from '../../assets/Logo.png'
import { navLinks } from '../../constants'
const Footer = () => {
  return (
    <footer className='bg-primary-300 py-16'>
        <div className='w-5/6 justify-around mx-auto md:flex gap-16'>
          <div className='basis-1/2 '>
            <img src={Logo} alt="" />
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam quidem, eligendi atque voluptatem possimus quis mollitia cum natus esse.</p>
            <p className='font-bold'>&copy; 2023 Evogym. All Rights Reserved.</p>
          </div>
          <div className='basis-1/4 mt-8 md:mt-0'>
            <h4 className='text-lg'>Link</h4>
            <ul className='mt-5'>
            { navLinks.map((nav) => (
              <li key={nav.id} className={` hover:text-primary-500 text-lg font-medium transtion duration-300`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            </ul>
          </div>
          <div className='mt-8 md:mt-0'>
            <h4 className='basis-1/4 mb-8 text-lg'>Contact Us</h4>
            <p className='font-bold'>(021)927458</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer