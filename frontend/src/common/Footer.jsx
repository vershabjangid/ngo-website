import React from 'react'
import { Logo } from './Logo'
import { FaFacebook } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <>
            <footer className='w-[100%] p-[20px] py-[40px] bg-[black] text-white uppercase flex'>
                <section className='w-[25%] flex justify-center items-center flex-col'>
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

                <section className='w-[25%] flex justify-center items-start flex-col'>
                    <p className='text-[20px] font-[600]'>Pages</p>
                    <section className='mt-[10px]'>
                        <section className=''>
                            <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Home
                            </Link>

                            <Link to={"/about-us"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> About US
                            </Link>


                              <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Home
                            </Link>

                              <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Home
                            </Link>

                              <Link to={"/"} className='flex mb-[10px]'>
                                <MdKeyboardArrowRight className='text-[25px]' /> Home
                            </Link>
                            

                        </section>
                    </section>
                </section>


                <section className='w-[25%] flex justify-center items-center flex-col'>
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


                <section className='w-[25%] flex justify-center items-center flex-col'>
                    <section className='mt-[10px]'>
                        <section className='flex'>
                            <ul></ul>
                            <a href="https://www.facebook.com/share/14pQ16bcTq/">
                                <FaFacebook className='text-[25px]' />
                            </a>

                            <a href="https://youtube.com/@rcmicci9139?si=HlMYvSjnDgRhVX0c">
                                <FaYoutube className='text-[25px] mx-5' />
                            </a>

                        </section>
                    </section>
                </section>



            </footer>
        </>
    )
}
