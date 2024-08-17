import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='mb-12 shadow-lg navbar bg-[#261230] font-bold  text-white text-neutral-content px-16'>
        <div className="container mx-auto flex  h-[5rem] justify-center items-center">
            <div className="flex-none px-2 mx-2 hover:text-secondary ">
                <Link to='/' className='text-lg font-bold align-middle'>
                {title}
                </Link>
                <FaGithub className='inline pl-2 text-3xl'/>
            </div>
            <div className="flex-1 px-2 mx-2  ">
                <div className="flex justify-end gap-4">
                    <Link to='/' className='rounded btn btn-ghost btn-sm hover:text-secondary'>Home</Link>
                    <Link to='/about' className='rounded btn btn-ghost btn-sm hover:text-secondary'>About</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
};

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar