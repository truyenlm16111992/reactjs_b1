import React from 'react'

const Banner = () => {
    return (
        <div className='bg-white py-12'>
            <div className='container mx-auto px-12'>
                <div className='px-6'>
                    <div className='p-12 rounded-md bg-[#F8F9FA] text-center'>
                        <h1 className='font-bold text-5xl mb-2'>A warm welcome!</h1>
                        <p className='text-lg leading-9 mb-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className='py-2 px-4 border rounded-md bg-[#0d6efd] text-white text-xl' type='button'>Call to action</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner