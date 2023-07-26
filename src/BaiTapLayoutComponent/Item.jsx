import React from 'react'

const Item = (props) => {
    const { card } = props;
    return (
        <div className='px-6 mb-12 text-center'>
            <div className='bg-[#F8F9FA] p-12 pt-0'>
                <div className='flex'>
                    <div>
                        <div className='mx-auto h-16 w-16 -mt-8 mb-6 flex justify-center items-center bg-[#0d6efd] rounded-lg text-[2rem] text-white'><i className={`fa ${card.icon}`}></i></div>
                        <h3 className='text-2xl font-bold mb-2'>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item