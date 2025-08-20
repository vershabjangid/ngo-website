import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { LuClipboardList, LuUserCheck, LuUserPlus } from 'react-icons/lu'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { FaPhotoFilm, FaXmark } from 'react-icons/fa6'
import { apiurl, getCookie } from '../apiurl/Apiurl'
import { FaHome, FaInfo, FaNewspaper, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { TbDoorExit } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'

export function Header() {

    let [sidebar, setsidebar] = useState(false)
    let [cookie, setcookie] = useState(0)
    let checksession = () => {
        try {
            apiurl.post('/user/check-web-session')
                .then((res) => {
                    if (res.data.Status === 1) {
                        console.log(res.data.Message)
                        setcookie(1)
                    }
                    else {
                        document.cookie = 'logintoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checksession()
    }, [])

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
                        {
                            cookie ?
                                <section className='relative'>
                                    <section className='w-[50px] h-[50px] border-[1px] border-[black] rounded-[50%]' onClick={() => setsidebar(!sidebar)} >
                                        <Logo />
                                    </section>
                                    {
                                        sidebar ?
                                            <section className='desktop_megamenu w-[270px] h-[375px] overflow-y-scroll text-white p-2 rounded-[15px] right-0 absolute bg-[black] top-[125%] z-[99999]'>

                                                {
                                                    cookie === 1 ?

                                                        <div className='w-[100%] flex items-center py-3 cursor-pointer text-white border-b-[1px]'>
                                                            <div className='w-[100%]'>
                                                                <div className='ms-2 text-[14px] flex items-center'>
                                                                    <div className='w-[50px] h-[50px] border-[1px] rounded-[50%] overflow-hidden'>
                                                                        <Logo />
                                                                    </div>
                                                                    <div className='ms-2'>
                                                                        <p>
                                                                            Name
                                                                        </p>
                                                                        <p>User ID</p>
                                                                    </div>
                                                                </div>
                                                                <div className='w-[100%] px-2 mt-4'>
                                                                    <Link className='bg-[white] w-[100%] text-black flex items-center justify-between px-4 py-2 rounded-[100px] font-[500]'>
                                                                        Profile
                                                                        <CgProfile />
                                                                    </Link>

                                                                    <button className='bg-[white] w-[100%] text-black flex items-center justify-between px-4 py-2 rounded-[100px] font-[500] mt-3'>
                                                                        Logout
                                                                        <TbDoorExit />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        :
                                                        <section className='flex items-center flex-col border-b-[1px]'>
                                                            <Link to={"/sign-up"} className='megamenu_btn w-[250px] font-[600] rounded-[30px] mt-2 bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                                                <LuUserPlus className='me-2' /> Become a Member
                                                            </Link>

                                                            <Link to={"/sign-in"} className='megamenu_btn w-[250px] font-[600] my-2 rounded-[30px] bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                                                <LuUserCheck className='me-2' /> Login
                                                            </Link>

                                                        </section>
                                                }
                                                <Link to={"/"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        Home
                                                    </div>
                                                </Link>


                                                <Link to={"/about"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        About Us
                                                    </div>
                                                </Link>


                                                <Link to={"/contact-us"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        Contact Us
                                                    </div>
                                                </Link>


                                                <Link to={"/gallery"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        Gallery
                                                    </div>
                                                </Link>


                                                <Link to={"/news"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        News & Events
                                                    </div>
                                                </Link>


                                                <Link to={"/terms-conditions"} className='flex items-center py-3 border-b-[1px]'>

                                                    <div className='ms-2 text-[14px]'>
                                                        Terms & Conditions
                                                    </div>
                                                </Link>


                                                <Link to={"/privacy-policy"} className='flex items-center py-3'>

                                                    <div className='ms-2 text-[14px]'>
                                                        Privacy Policy
                                                    </div>
                                                </Link>
                                            </section> :
                                            null
                                    }
                                </section>
                                :
                                <div className='flex'>
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
                        }
                    </div>
                </section>
            </header>

            {
                sidebar ?
                    <section className='megamenu hidden fixed right-0 top-[0%]  w-[300px] h-[100vh] overflow-y-scroll bg-[black] z-[99999]'>
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

                        {
                            cookie === 1 ?

                                <div className='w-[100%] flex items-center py-3 cursor-pointer text-white border-b-[1px]'>
                                    <div className='w-[100%]'>
                                        <div className='ms-2 text-[14px] flex items-center'>
                                            <div className='w-[50px] h-[50px] border-[1px] rounded-[50%] overflow-hidden'>
                                                <Logo />
                                            </div>
                                            <div className='ms-2'>
                                                <p>
                                                    Name
                                                </p>
                                                <p>User ID</p>
                                            </div>
                                        </div>
                                        <div className='w-[100%] px-2 mt-4'>
                                            <Link className='bg-[white] w-[100%] text-black flex items-center justify-between px-4 py-2 rounded-[100px] font-[500]'>
                                                Profile
                                                <CgProfile />
                                            </Link>

                                            <button className='bg-[white] w-[100%] text-black flex items-center justify-between px-4 py-2 rounded-[100px] font-[500] mt-3'>
                                                Logout
                                                <TbDoorExit />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                :
                                <section className='flex items-center flex-col border-b-[1px]'>
                                    <Link to={"/sign-up"} className='megamenu_btn w-[250px] font-[600] rounded-[30px] mt-2 bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                        <LuUserPlus className='me-2' /> Become a Member
                                    </Link>

                                    <Link to={"/sign-in"} className='megamenu_btn w-[250px] font-[600] my-2 rounded-[30px] bg-[white] text-black py-3 px-4 flex justify-center items-center'>
                                        <LuUserCheck className='me-2' /> Login
                                    </Link>

                                </section>
                        }


                        <section className='text-[white] pb-[60px]'>
                            <Link to={"/"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    Home
                                </div>
                            </Link>


                            <Link to={"/about"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    About Us
                                </div>
                            </Link>


                            <Link to={"/contact-us"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    Contact Us
                                </div>
                            </Link>


                            <Link to={"/gallery"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    Gallery
                                </div>
                            </Link>


                            <Link to={"/news"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    News & Events
                                </div>
                            </Link>


                            <Link to={"/terms-conditions"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    Terms & Conditions
                                </div>
                            </Link>


                            <Link to={"/privacy-policy"} className='flex items-center py-3 border-b-[1px]'>

                                <div className='ms-2 text-[14px]'>
                                    Privacy Policy
                                </div>
                            </Link>



                        </section>
                    </section> :
                    null
            }
        </section>
    )
}
