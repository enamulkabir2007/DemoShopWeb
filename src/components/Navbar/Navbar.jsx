import { data } from 'autoprefixer'
import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'Shop',
    link: '/shop'
  },
  {
    id: 3,
    name: 'About',
    link: '/about'
  },
  {
    id: 4,
    name: 'Blog',
    link: '/blog'
  },
  {
    id: 5,
    name: 'Contact',
    link: '/contact'
  }
  
]
const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo and links section */}
          <div className="flex items-center gap-4">
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>JISAN
            </a>
            {/* menu items */}
            <div className='hidden lg:block'>
              <ul className="flex items-center gap-4">
                {
                  MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200' > {""}{data.name} </a>

                    </li>
                  ))
                }
              </ul>
            </div>

          </div>


          {/* Navbar section */}
          <div className='flex justify-between items-center gap-4'>
            {/* search bar section */}
            <div className='relative group hidden sm:block'>
              <input type='text' placeholder='Search' className='search-bar'/>
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary  dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
            </div>
            {/* cart section */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex justify-center items-center text-xs'>4</div>
            </button>

            {/* dark mode section */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
