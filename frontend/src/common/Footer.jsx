import React from 'react'
import { Logo } from './Logo'
import { FaFacebook } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ContactInfo } from './ContactInfo'

export function Footer() {
    return (
        <>
            <footer className='w-[100%] p-[20px] py-[40px] bg-[black] text-white uppercase flex justify-between flex-wrap'>
                <section className='flex justify-center items-center flex-col'>
                    <section className='w-[130px]'>
                        <Logo />
                    </section>
                    <p className='mt-[20px] text-[20px]'>Follow US ON</p>
                    <section className='mt-[10px]'>
                        <section className='flex'>
                            <a href="https://www.facebook.com/share/14pQ16bcTq/">
                                <FaFacebook className='text-[25px]' />
                            </a>

                            <a href="https://youtube.com/@rcmicci9139?si=HlMYvSjnDgRhVX0c">
                                <FaYoutube className='text-[25px] mx-5' />
                            </a>

                        </section>
                    </section>
                </section>

                <section className='flex justify-center items-start flex-col ms-5'>
                    <p className='text-[20px] font-[600]'>Pages</p>
                    <section className='mt-[10px]'>
                        <section className=''>
                            <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Home
                            </Link>

                            <Link to={"/about"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> About US
                            </Link>


                            <Link to={"/contact-us"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Contact US
                            </Link>


                            <Link to={"/gallery"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Gallery
                            </Link>

                            <Link to={"/news"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> News & Events
                            </Link>


                            <Link to={"/terms-conditions"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Terms & Conditions
                            </Link>


                            <Link to={"/privacy-policy"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Privacy Policy
                            </Link>


                        </section>
                    </section>
                </section>


                <section className=' flex-col ms-5'>
                    <p className='text-[20px] font-[600]'>Quick Links</p>
                    <section className='mt-[10px]'>
                        <section className=''>
                            <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> ID Card
                            </Link>

                            <Link to={"/contact-us"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Certificates
                            </Link>


                            <Link to={"/about"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Appointment Letter
                            </Link>




                            <Link to={"/gallery"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Donate Us
                            </Link>

                        </section>
                    </section>
                </section>



                <section className='w-[350px] text-[14px] ms-5'>
                    <p className='mb-[20px] font-[600] text-[20px]'>
                        Contact Information
                    </p>
                    <ContactInfo />
                </section>



            </footer>
        </>
    )
}
