import React from 'react'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img2 from '../assets/wave2.png'
import img55 from '../assets/img55.png'
import img555 from '../assets/img555.png'
const hero = () => {
    return (
        <>
            <div className='px-6 flex flex-col items-center lg:pt-10 lg:flex-row'>
                <div className='flex flex-col items-center xl:items-start'>
                    <div className='text-[#FBAE17] '>WHY UDDHESHYA ?</div>

                    <p>Uddeshya is an innovative school readiness program designed by the High Sky Child Development Centre. This program aims to equip young children with the necessary skills and knowledge to ensure a smooth transition into formal schooling. Recognizing the importance of early childhood development, Uddeshya focuses on holistic growth, addressing cognitive, social, emotional, and physical aspects of a child's development.</p>
                </div>
                <img src={img3} className='h-56 mt-6' />
            </div>
            <div className='px-6 flex flex-col items-center lg:pt-10 lg:flex-row'>
                <img src={img4} className='h-56 mt-6 hidden lg:block' />

                <div className='flex flex-col items-center xl:items-start'>
                    <div className='text-[#FBAE17] '>HOW DOES UDDESHYA WORKS ?</div>

                    <p>The Uddeshya School Readiness Program is designed to unlock your child's full potential through a personalized and holistic approach. Starting with consultation and screening, we create tailored plans with specific goals. The program includes individual and group therapy sessions, along with real-world life skills training. Ongoing counseling and parent-teacher meetings ensure alignment in your child's cognitive, emotional, and social development, preparing them to thrive in school and beyond.</p>
                    <img src={img4} className='h-56 mt-6 lg:hidden' />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#582B80] p-4 rounded-xl text-white'>ENROLL YOUR CHILD NOW</button>
            </div>


            <div className="">
                <img src={img55} alt="" className="w-full h-[60rem] lg:hidden" />
                <img src={img555} alt="" className="w-full h-[60rem] hidden lg:block" />
            </div>

        </>
    )
}

export default hero