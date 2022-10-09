import React from 'react'

function Navbar() {
  return (
    <div className='w-screen bg-teal-900 text-white p-5 fixed top-0'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <div className='text-lg '>
                    CODEX
                </div>
            </div>
            <div>
                <div>
                    <ul className='flex items-center'>
                        <li className='mr-5'>Home</li>
                        <li className='mx-5'>About</li>
                        <li className='mx-5'>Projects</li>
                        <li className='mx-5'>Contact</li>
                        <li className='ml-5'>Order</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar