import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1e1b4b] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/8ccb67c2-9280-460e-a5c6-a202b127e820" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'>Contact</p>
                

                <p className='text-gray-300 py-4'>// Welcome to our Contact Us page! We're here to assist you and answer any questions you may have.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact