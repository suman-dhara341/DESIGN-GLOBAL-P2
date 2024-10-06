import React from 'react'
import wavevv from '../assets/wavevv.png'

const Hero = () => {
    return (
        <>
            <div className='relative'>
                <div className='bg-[#582B80] pt-20 px-4 py-3 h-96'>
                    <div className='flex items-center justify-center flex-col text-white'>
                        <div>CONTACT US</div>
                        <p>We’d love to hear from you!</p>
                    </div>
                    <div className='text-white bg-yellow-400 rounded-2xl p-2 mt-4 lg:w-96 lg:ml-52'>Whether you have a question, feedback, or need assistance, our team is here to help!</div>
                </div>
                <img src={wavevv} className='absolute top-52  h-52 w-full  lg:h-64' />

                <div className='flex items-center justify-center flex-col mt-8 lg:mt-16'>
                    <p className='my-4'>OUR CENTRES</p>
                    <div className='lg:flex items-center gap-32'>
                        <div className='w-full h-64 lg:hidden'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31203.165332528744!2d88.3382940056683!3d22.586932174607604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027795d8ab719b%3A0x45ef375a63fd05f3!2sHowrah!5e0!3m2!1sen!2sin!4v1728186488265!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-[#FBAE17]'>Branch 1 :</p>
                            <p>MANIKONDA BRANCH</p>
                            <p>Near Lancohills circle, Sri Laxmi </p>
                            <p>Nagar Colony, Manikonda, </p>
                            <p>Hyderabad, Telangana 500089</p>
                        </div>
                        <div className='w-full h-64 hidden lg:block'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31203.165332528744!2d88.3382940056683!3d22.586932174607604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027795d8ab719b%3A0x45ef375a63fd05f3!2sHowrah!5e0!3m2!1sen!2sin!4v1728186488265!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className='my-4 lg:flex lg:gap-32 mt-16'>
                        <div className='w-full h-64 '>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31203.165332528744!2d88.3382940056683!3d22.586932174607604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027795d8ab719b%3A0x45ef375a63fd05f3!2sHowrah!5e0!3m2!1sen!2sin!4v1728186488265!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className='lg:'>
                            <p className='text-[#FBAE17]'>Branch 2 :</p>
                            <p>KONDAPUR BRANCH</p>
                            <p>Manasa residency,  </p>
                            <p> 5th floor, botanical garden road, </p>
                            <p>kondapur</p>
                        </div>
                        {/* <div className='w-full h-64 hidden lg:block'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31203.165332528744!2d88.3382940056683!3d22.586932174607604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027795d8ab719b%3A0x45ef375a63fd05f3!2sHowrah!5e0!3m2!1sen!2sin!4v1728186488265!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero