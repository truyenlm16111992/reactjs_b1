import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#20232A]'>
            <div className='container mx-auto px-12'>
                <div className='flex justify-between items-center px-6'>
                    <h3 className='text-white text-xl'>Start Bootstrap</h3>
                    <ul className='flex text-white/[.55]'>
                        <li className='p-5'><a href='#' className='text-white'>Home</a></li>
                        <li className='p-5'><a href='#'>About</a></li>
                        <li className='p-5'><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header