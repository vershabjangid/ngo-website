import React, { useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { LuUserCheck, LuUserPlus } from 'react-icons/lu'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { FaXmark } from 'react-icons/fa6'

export function Header() {

    let [sidebar, setsidebar] = useState(false)
    return (
        <section className=' relative'>
            <header className='bg-[white] h-[90px] flex items-center justify-between p-2 px-3'>
                <section className='flex items-center'>
                    <section className='Logo_section w-[80px] '>
                        <Logo />
                    </section>

                    <section className='ms-2'>
                        <p className='header_heading text-[30px] font-[600]'>RESERVE CATEGORY & MINORITY</p>
                        <p className='header_sub_heading'>INDIAN CHAMBER OF COMMERCE & INDUSTRY</p>
                    </section>
                </section>

                <section className='flex items-center'>
                    <div className='head_btn flex justify-center items-center relative'>
                        <div className='register_header_btn'>
                            <Link to={"/sign-up"} className=' font-[600] rounded-[30px] bg-[black] me-2 text-white py-3 px-4 flex items-center'>
                                <LuUserPlus className='me-2' /> Become a Member
                            </Link>
                        </div>

                        <Link to={"/sign-in"} className='head_login_btn font-[600] rounded-[30px] bg-[black] me-2 text-white py-3 px-4 flex items-center'>
                            <LuUserCheck className='me-2' /> Login
                        </Link>

                        <div className='menubar w-[30px] h-[30px] hidden rounded-[50%] relative' >
                            <HiOutlineBars3BottomRight className='text-[25px]' onClick={() => setsidebar(true)} />
                        </div>
                    </div>
                </section>
            </header>

            {
                sidebar ?
                    <section className='megamenu hidden absolute right-0 top-[0%]  w-[300px] h-[100vh] z-50 overflow-y-scroll bg-[black]'>
                        <section className='text-white flex items-center  p-2 px-3 justify-between border-b-[1px]'>
                            <section className='flex items-center'>
                                <section className='Logo_section w-[80px] '>
                                    <Logo />
                                </section>

                                <section className='ms-2 text-white'>
                                    <p className='megamenu_heading text-[30px] font-[600]'>RESERVE CATEGORY & MINORITY</p>
                                    <p className='megamenu_sub_heading'>INDIAN CHAMBER OF COMMERCE & INDUSTRY</p>
                                </section>
                            </section>

                            <section className='text-[25px]' onClick={() => setsidebar(false)}><FaXmark /></section>
                        </section>

                        <section className='flex items-center flex-col'>
                            <Link to={"/sign-up"} className='megamenu_btn w-[250px] font-[600] rounded-[30px] mt-2 bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                <LuUserPlus className='me-2' /> Become a Member
                            </Link>

                            <Link to={"/sign-in"} className='megamenu_btn w-[250px] font-[600] mt-2 rounded-[30px] bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                <LuUserCheck className='me-2' /> Login
                            </Link>
                        </section>
                    </section> :
                    null
            }
        </section>
    )
}
