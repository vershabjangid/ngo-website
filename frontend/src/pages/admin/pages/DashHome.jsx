import React from 'react'
import { AdminHeader } from '../../../common/AdminHeader'
import { AdminSidebar } from '../../../common/AdminSidebar'
import { FaHome } from 'react-icons/fa'
import { useFormik } from 'formik'
import { DashAddHomeBanner } from './dashboard home/add/DashAddHomeBanner'

export function DashHome() {
    let formik = useFormik({

    })
    return (
        <>
            <section className='w-[100%] h-[100vh]  bg-[#d7d7d76b] flex'>
                <AdminSidebar />
                <section className='w-[100%] h-[100%]'>
                    <AdminHeader />

                    <section className='w-[100%] h-[calc(100vh-66px)] overflow-y-scroll p-2 px-[20px]'>
                        <section className='w-[100%] px-3'>
                            <div className='text-[25px] flex items-center'>
                                <FaHome />
                                <h1 className='font-[600] ms-2'>
                                    Home
                                </h1>
                            </div>
                            <div className='font-[500] text-[15px]'>
                                <p>Dashboard / <span className='text-[#1385ff]'>Home</span></p>
                            </div>
                        </section>

                        <DashAddHomeBanner />



                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home About Section</p>
                            <p className='my-[20px] text-[15px]'> This section is where you can share your story, mission, and what makes your business or project unique. Use this space to introduce yourself, highlight your values, and let visitors know what they can expect from you.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home About Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home About Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>


                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home About Image
                                            </label>

                                            <input type="file" className='w-[100%] p-2 border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>



                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home Goals Section</p>
                            <p className='my-[20px] text-[15px]'>This section allows you to add a heading and a short paragraph to highlight your main goals. Use it to share your mission or focus areas. If you want to display goal cards on the homepage, you can add them through the Goals option.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Goals Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Goals Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>



                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home Our Management Body Section</p>
                            <p className='my-[20px] text-[15px]'>This section allows you to showcase your management team by adding individual cards for each member. You can include both a heading and a description to introduce the team and highlight their roles, experience, or contributions.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Management Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Management Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>



                            <p className='font-[600] text-[grey] mt-[25px]'> Home Our Management Card Section</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Name
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Designation
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>


                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Profile Picture
                                            </label>

                                            <input type="file" className='w-[100%] p-2 border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>


                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home Gallery Section</p>
                            <p className='my-[20px] text-[15px]'>This section allows you to add a heading and a short paragraph to highlight your galley. Use it to share your moments.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Gallery Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Gallery Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>


                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home Our Team Member Section</p>
                            <p className='my-[20px] text-[15px]'>This section allows you to showcase your management team by adding individual cards for each member. You can include both a heading and a description to introduce the team and highlight their roles, experience, or contributions.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Team Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Team Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>



                            <p className='font-[600] text-[grey] mt-[25px]'> Home Our Team Card Section</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Name
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Designation
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>


                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Profile Picture
                                            </label>

                                            <input type="file" className='w-[100%] p-2 border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>



                        <section className='w-[100%] py-[15px] rounded-[20px] my-[20px] bg-[white] px-3'>
                            <p className='font-[600] text-[grey]'> Home Donate For Smile Section</p>
                            <p className='my-[20px] text-[15px]'>In this section, you can add a heading and a description to encourage support for your cause. The donation-related cards displayed here are automatically pulled from the Goals section, helping you highlight key initiatives that need support.</p>

                            <section className='w-[100%] '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='w-[100%] flex justify-between my-[10px]'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Donate For Smile Heading
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>

                                        <div className='w-[48%]'>
                                            <label htmlFor="">
                                                Home Donate For Smile Description
                                            </label>

                                            <input type="text" className='w-[100%] p-[10px] border-[1px] border-[grey] text-[grey] mt-1 rounded-[25px]' />
                                        </div>
                                    </div>

                                    <div className='w-[100%] flex justify-between mt-[20px]'>
                                        <button className='bg-[#1385ff] px-[20px] py-[10px] rounded-[30px] text-[white]'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </section>

                    </section>
                </section>
            </section>
        </>
    )
}
