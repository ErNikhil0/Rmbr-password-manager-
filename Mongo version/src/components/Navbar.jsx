import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-indigo-950 text-white  '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-600'>&lt;</span>
                    <span>Rbm</span><span className='text-green-600'>BR/&gt;</span>


                </div>
                <ul>

                </ul>
                <button className="text-white bg-green-600 my-5 rounded-full flex justify-between items-center hover:bg-green-500">
                    <img className="invert w-10  p-1" src="/icons/github.svg" alt="github" />
                    <span className="font-bold px-2">GitHub</span>

                </button>
            </div>

        </nav>
    )
}

export default Navbar
