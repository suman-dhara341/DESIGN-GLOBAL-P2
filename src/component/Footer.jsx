import React from 'react'
import wave6 from '../assets/wave6.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[#254A33] text-white flex flex-col items-center pb-4'>
                <div className='pt-4'>
                    <p className='font-bold'>Ready to Grow? </p>
                    <p className='font-bold'>Enroll at High Sky Now!</p>
                </div>
                <div className='lg:flex lg:flex-row mt-7 gap-5'>

                    <div>
                        <p className='text-[#FBAE17] '>PARENT DETAILS</p>
                        <p>NAME OF THE PARENT:</p>
                        <input type="text" className='mb-4' />
                        <p>CONTACT NO:</p>
                        <input type="text" className='mb-4' />
                        <p>EMAIL ID:</p>
                        <input type="text" className='mb-4' />
                    </div>
                    <div>
                        <p className='text-[#FBAE17]'>CHILD DETAILS</p>
                        <p>AGE OF THE FIRST CHILD:</p>
                        <input type="text" className='mb-4' />
                        <p>VISITING PURPOSE:</p>
                        <input type="text" className='mb-4' />
                        <p>COMMENTS:</p>
                        <input type="text" className='mb-4' />
                    </div>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <button className='p-4 bg-[#FBAE17] rounded-3xl'>SUBMIT</button>
                </div>
                <p>"You’re all set! We’ll connect with you shortly."</p>
                <p className='text-red-600'>"Something’s Missing, Give It Another Go!"</p>





                {/* 2nd section  */}

                <div className='relative mt-5'>
                    <img src={wave6} />
                    <div className='lg:flex lg:items-center lg:justify-evenly  bg-[#FFB30B]'>
                        <div className='flex items-center justify-center flex-col pt-4'>
                            <p>QUICK LINKS</p>
                            <p>ABOUT US</p>
                            <p>PROGRAMS</p>
                            <p>ADMISSIONS</p>
                            <p>PARENT RESOURCES</p>
                            <p>UDDESHYA</p>
                            <p>TESTIMONIALS</p>

                            <div className='mt-5 flex flex-col items-center justify-center border-t-2 border-black pb-4'>
                                <p className='mt-4'>JOIN OUR HIGH SKY</p>
                                <p> FAMILY NOW !</p>
                                <button className='bg-white text-black p-4 rounded-3xl mt-4 '>ENROLL NOW</button>
                            </div>
                        </div>




                        <div className='flex items-center justify-center flex-col p-6'>
                            <p>CONTACT US</p>
                            <div>
                                <div className='flex items-center gap-4 pt-4'>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>091008141615</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <i class="fa-solid fa-phone"></i>
                                    <div>
                                        <p>BRANCH 1:</p>
                                        <p>
                                            Near Lancohills circle, Sri Laxmi Nagar Colony, Manikonda,</p>
                                        <p> Hyderabad, Telangana 500089</p>
                                    </div>

                                </div>
                                <div className='flex items-center gap-4'>
                                    <i class="fa-solid fa-phone"></i>
                                    <div>
                                        <p>BRANCH 2:</p>
                                        <p>5A, 5th floor, Mansa Residency, Botanical Garden Rd, </p>
                                        <p>beside Aparna Heights 2, Laxmi Nagar, Hyderabad, Kondapur, Telangana 500084</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FFB30B] absolute w-full'>
                        <div className='flex items-center flex-col mt-4'>
                            <p>FOLLOW US ON SOCIAL MEDIA</p>
                            <div className='flex items-center justify-center gap-6 my-5'>
                                <i class="fa-brands fa-facebook fa-lg"></i>
                                <i class="fa-solid fa-x fa-lg"></i>
                                <i class="fa-brands fa-instagram fa-lg"></i>
                                <i class="fa-brands fa-youtube fa-lg"></i>
                                <i class="fa-brands fa-linkedin fa-lg"></i>
                            </div>
                            <p>© 2024 High Sky Child Development Centre. All rights reserved.</p>
                        </div>
                    </div>



                </div>

            </div>



        </>
    )
}

export default Footer