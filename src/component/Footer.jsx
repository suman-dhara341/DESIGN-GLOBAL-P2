import React from 'react'
import wave333 from '../assets/wave333.png'

const Footer = () => {
    return (
        <div>
            <img src={wave333} alt="" />
            <div className='bg-[#582B80] h-56 text-white flex flex-col items-center lg:flex-row justify-center lg:gap-12'>
                <div>
                    <p>GENERAL ENQUIRIES</p>
                    <div>
                        <p>priyanka.umeot@gmail.com</p>
                    </div>
                    <div>
                        <p>091008 14615</p>
                    </div>
                </div>
                <div className='flex items-center flex-col mt-4'>
                    <p>FOLLOW US ON SOCIAL MEDIA</p>
                    <div className='flex items-center justify-center gap-6 my-5'>
                        <i class="fa-brands fa-facebook fa-lg"></i>
                        <i class="fa-solid fa-x fa-lg"></i>
                        <i class="fa-brands fa-instagram fa-lg"></i>
                        <i class="fa-brands fa-youtube fa-lg"></i>
                        <i class="fa-brands fa-linkedin fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer