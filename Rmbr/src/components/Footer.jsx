import React from 'react'
const Footer = () => {
    return (
        <div className='bg-indigo-950 text-white flex flex-col justify-center items-center fixed bottom-0 w-full text-center p-4'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-600'>&lt;</span>
                <span>Rbm</span><span className='text-green-600'>BR/&gt;</span>
            </div>
            <div className='flex justify-center items-center'>
                Created by NIKHIL<lord-icon
                    src="https://cdn.lordicon.com/mebvgwrs.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#f9c9c0,tertiary:#30e849,quaternary:#c7166f,quinary:#ebe6ef">
                </lord-icon>
            </div>
        </div>
    );
};

export default Footer;

