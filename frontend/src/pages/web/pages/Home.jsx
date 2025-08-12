import React, { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Logo } from '../../../common/Logo'
import { Footer } from '../../../common/Footer'
import { QuickLinks } from '../../../pages/web/pages/QuickLinks'
import { Header } from '../../../common/Header'
import { apiurl } from '../../../apiurl/Apiurl'
import { FaXmark } from 'react-icons/fa6';
import { FixedOptionHeader } from '../../../common/FixedOptionHeader';
export function Home() {

    let [bannerdata, setbannerdata] = useState([])
    let [aboutdata, setaboutdata] = useState([])
    let [goalsdata, setgoalsdata] = useState([])
    let [homemanagement, sethomemanagement] = useState([])
    let [homemanagementprofiles, sethomemanagementprofiles] = useState([])
    let [homegallerydata, sethomegallerydata] = useState([])
    let [hometeamdata, sethometeamdata] = useState([])
    let [homemanagementprofiledata, sethomemanagementprofiledata] = useState([])
    let [homedonationdata, sethomedonationdata] = useState([])
    let [homegoalscarddata, sethomegoalscarddata] = useState([])
    let [homegalleryimagesdata, sethomegalleryimagesdata] = useState([])
    let [homegoalscardheading, sethomegoalscardheading] = useState([])
    let [homegoalscardparagraph, sethomegoalscardparagraph] = useState([])
    let [model, setmodel] = useState(false)
    let [modalheading, setmodalheading] = useState(null)

    let [imgurl, setimgurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [homebannerdata, homeaboutdata, homegoalsdata, homemanagementdata, homemanagementprofilesdata, homegallerydata, hometeamdata, hometeamprofiledata, homedonationdata, homegoalscarddata, homegalleryimagesdata, fetchcardparagraphheading, fetchcardparagraph, homegoalscardheadingdata] = await Promise.all([
                apiurl.get('/admin/view-home-banner'),
                apiurl.get('/admin/view-home-about-banner'),
                apiurl.get('/admin/view-home-goals'),
                apiurl.get('/admin/view-home-management-body'),
                apiurl.get('/admin/view-home-management-card'),
                apiurl.get('/admin/view-home-gallery'),
                apiurl.get('/admin/view-home-team'),
                apiurl.get('/admin/view-home-team-card'),
                apiurl.get('/admin/view-home-donation'),
                apiurl.get('/admin/view-goals-card'),
                apiurl.get('/admin/view-gallery'),
                apiurl.get('/admin/view-goals-paragraph-heading'),
                apiurl.get('/admin/view-goals-card-paragraph'),
                apiurl.get('/admin/view-goals-paragraph-heading')
            ])

            return {
                homebanner: homebannerdata.data.viewdata,
                imgurl: homebannerdata.data.imgurl,
                homeabout: homeaboutdata.data.viewdata,
                homegoals: homegoalsdata.data.viewdata,
                homemanagement: homemanagementdata.data.viewdata,
                homemanagementprofiles: homemanagementprofilesdata.data.viewdata,
                homegallery: homegallerydata.data.viewdata,
                hometeams: hometeamdata.data.viewdata,
                hometeamsprofiles: hometeamprofiledata.data.viewdata,
                homedonations: homedonationdata.data.viewdata,
                homegoalscard: homegoalscarddata.data.viewdata,
                homegalleryimages: homegalleryimagesdata.data.viewdata,
                fetchcardparagraphheadingdata: fetchcardparagraphheading.data.viewdata,
                fetchcardparagraphdata: fetchcardparagraph.data.viewdata,
                homegoalscardheading: homegoalscardheadingdata.data.viewdata,
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    let viewdata = () => {
        try {
            fetchalldata()
                .then((res) => {
                    setbannerdata(res.homebanner)
                    setimgurl(res.imgurl)
                    setaboutdata(res.homeabout)
                    setgoalsdata(res.homegoals)
                    sethomemanagementprofiles(res.homemanagementprofiles)
                    sethomemanagement(res.homemanagement)
                    sethomegallerydata(res.homegallery)
                    sethometeamdata(res.hometeams)
                    sethomemanagementprofiledata(res.hometeamsprofiles)
                    sethomedonationdata(res.homedonations)
                    sethomegoalscarddata(res.homegoalscard)
                    sethomegalleryimagesdata(res.homegalleryimages)
                    sethomegoalscardheading(res.fetchcardparagraphheadingdata)
                    sethomegoalscardparagraph(res.fetchcardparagraphdata)
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
        viewdata()
    }, [])

    return (
        <>
            <section className='main m-auto w-[100%]'>
                <Header />
                {
                    model ?
                        <section className='w-[100%] h-[100vh] fixed top-0 bg-[#0000006a] z-[99999] flex justify-center items-center'>
                            <section className='w-[100%] h-[100%] bg-[white]'>
                                <section className='w-[100%] border-b-[1px] border-[black] p-3 text-[20px] flex justify-end'>
                                    <FaXmark className=' cursor-pointer' onClick={() => setmodel(false)} />
                                </section>
                                <section className='w-[100%] h-[calc(100vh-80px)] overflow-y-scroll rounded-b-[20px]  p-3'>
                                    <p className='text-[25px] font-[700] mb-[15px]'>{modalheading[0]}</p>

                                    {
                                        homegoalscardheading === undefined || homegoalscardheading.length === 0 ?
                                            null :
                                            homegoalscardheading.map((items, index) => {
                                                return (
                                                    <section key={index}>
                                                        {
                                                            modalheading[1] === items.Home_Card_Id ?
                                                                <div className=''>
                                                                    <div className=' flex items-center justify-between text-[#6d6b6b]'>
                                                                        <p className='mb-[5px] text-[18px] font-[600]'>{items.Home_Card_Paragraph_Heading}</p>
                                                                    </div>
                                                                    {
                                                                        homegoalscardparagraph.length === 0 ?
                                                                            null :
                                                                            homegoalscardparagraph.map((value, index) => {
                                                                                return (
                                                                                    <section key={index}>
                                                                                        {
                                                                                            items._id === value.Home_Card_Content_Heading ?
                                                                                                <div className=' flex items-center justify-between text-[#000000]'>
                                                                                                    <p className='mb-[15px] text-[16px]'>{value.Home_Card_Content_Paragraph}</p>
                                                                                                </div> :
                                                                                                null
                                                                                        }
                                                                                    </section>
                                                                                )
                                                                            })
                                                                    }
                                                                </div>
                                                                : null
                                                        }
                                                    </section>
                                                )
                                            })
                                    }
                                </section>
                            </section>
                        </section>
                        :
                        null
                }
                {
                    bannerdata.length === 0 ?
                        null :
                        <section className=' relative'>
                            <FixedOptionHeader />
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 3000, // 3 seconds
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                spaceBetween={0}
                                slidesPerView={1}
                            >
                                {
                                    bannerdata.map((items, ind) => {
                                        return (
                                            <section key={ind}>
                                                <SwiperSlide>
                                                    <div className='home_banner_slides w-[100%] h-[100vh] flex justify-center items-center' style={{ background: `url(${imgurl + items.Home_Banner_Image})`, backgroundSize: "cover" }}>
                                                        <section className='w-[100%] h-[100%] flex items-center bg-[#00000088] '>
                                                            <section className='w-[100%] text-center p-3'>.
                                                                <section className='w-[120px] m-auto'>
                                                                    <Logo />
                                                                </section>
                                                                <p className='text-white text-[30px] font-[700]'>{items.Home_Banner_Heading}</p>
                                                                <p className='text-white text-[18px]'>{items.Home_Banner_Description}</p>
                                                            </section>
                                                        </section>
                                                    </div>
                                                </SwiperSlide>
                                            </section>
                                        )
                                    })
                                }
                            </Swiper>
                        </section>
                }
                <QuickLinks />

                {
                    aboutdata === null ?
                        null :
                        <section className='home_about_us w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[30%] flex justify-center items-center'>
                                <section className='w-[300px]'>
                                    <img src={imgurl + aboutdata.Home_About_Image} alt="" className='w-[100%]' />
                                </section>
                            </section>
                            <section className='w-[70%]'>
                                <h2 className='home_heading text-[30px] font-[700] uppercase'>
                                    {aboutdata.Home_About_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px] '>
                                    {aboutdata.Home_About_Description}
                                </p>

                                <Link className='w-[160px] h-[50px] rounded-[30px] bg-[black] text-white font-[600] flex items-center justify-center'>
                                    Know More <FiArrowRight className='text-[20px] ms-3' />
                                </Link>
                            </section>
                        </section>

                }


                {
                    goalsdata === null || homegoalscarddata.length === 0 ?
                        null :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {goalsdata.Home_Goals_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {goalsdata.Home_Goals_Description}
                                </p>

                                <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                                    {
                                        homegoalscarddata.length === 0 ?
                                            null :
                                            homegoalscarddata.map((items, index) => {
                                                return (
                                                    <section key={index}>
                                                        <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]' onClick={() => setmodel(true) || setmodalheading([items.Home_Goals_Heading, items._id])}>
                                                            <img src={imgurl + items.Home_Goals_Card_Icon} alt="" className='m-auto' />
                                                            <p className='my-[5px] text-[20px] font-[600]'>
                                                                {items.Home_Goals_Heading}
                                                            </p>
                                                            <p className='text-[13px]'>
                                                                {items.Home_Goals_Description}
                                                            </p>
                                                        </section>
                                                    </section>
                                                )
                                            })
                                    }

                                </section>
                            </section>
                        </section>
                }

                {
                    homemanagement === null ?
                        null :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {homemanagement.Home_Management_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {homemanagement.Home_Management_Description}
                                </p>

                                {
                                    homemanagementprofiles.length === 0 ?
                                        null
                                        :
                                        <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                                            {
                                                homemanagementprofiles.map((items, index) => {
                                                    return (
                                                        <section key={index} className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                                            <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                                                <img src={imgurl + items.Home_Management_Profile_Picture} alt="" className='m-auto w-[100%] h-[100%]' />
                                                            </section>

                                                            <p className=' mt-[20px]  text-[20px] font-[600]'>
                                                                {items.Home_Management_Profile_Name}
                                                            </p>
                                                            <p className='text-[13px] mb-[10px]'>
                                                                ( {items.Home_Management_Profile_Designation} )
                                                            </p>
                                                            <p className='text-[15px]'>
                                                                {items.Home_Management_Profile_Description}
                                                            </p>
                                                        </section>
                                                    )
                                                })
                                            }


                                        </section>
                                }
                            </section>
                        </section>

                }

                {
                    homegallerydata === null ?
                        null
                        :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {homegallerydata.Home_Gallery_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {homegallerydata.Home_Gallery_Description}
                                </p>

                                <section className='w-[100%] my-[10px] flex flex-wrap py-2 justify-between'>
                                    {
                                        homegalleryimagesdata.length === 0 ?
                                            null :
                                            homegalleryimagesdata.length < 3 ?

                                                <div className='w-[100%] flex justify-evenly items-center'>
                                                    {
                                                        homegalleryimagesdata.map((items, index) => {
                                                            return (
                                                                <img key={index} src={imgurl + items.Gallery_Event_Image} alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                                            )
                                                        })
                                                    }
                                                </div>


                                                :


                                                <Swiper
                                                    modules={[Autoplay]}
                                                    autoplay={{
                                                        delay: 3000, // 3 seconds
                                                        disableOnInteraction: false,
                                                    }}
                                                    loop={true}
                                                    spaceBetween={30}
                                                    slidesPerView={3}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 1,
                                                        },
                                                        800: {
                                                            slidesPerView: 2,
                                                        },
                                                        1100: {
                                                            slidesPerView: 3,
                                                        },
                                                    }}
                                                >
                                                    {
                                                        homegalleryimagesdata.map((items, index) => {
                                                            return (
                                                                <SwiperSlide key={index}>
                                                                    <div className='w-[100%] flex justify-center items-center'>
                                                                        <img src={imgurl + items.Gallery_Event_Image} alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                                                    </div>
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }

                                                </Swiper>
                                    }
                                </section>
                            </section>
                        </section>

                }




                {
                    hometeamdata === null || homemanagementprofiledata.length === 0 ? null :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {hometeamdata.Home_Team_Member_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {hometeamdata.Home_Team_Member_Description}
                                </p>

                                <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>

                                    {
                                        homemanagementprofiledata.map((items, index) => {
                                            return (
                                                <section key={index}>
                                                    <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                                        <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                                            <img src={imgurl + items.Home_Team_Profile_Picture} alt="" className='m-auto w-[100%] h-[100%] rounded-[50%]' />
                                                        </section>

                                                        <p className=' mt-[20px]  text-[20px] font-[600]'>
                                                            {items.Home_Team_Profile_Name}
                                                        </p>
                                                        <p className='text-[13px] mb-[10px]'>
                                                            ( {items.Home_Team_Profile_Designation} )
                                                        </p>
                                                        <p className='text-[15px]'>
                                                            {items.Home_Team_Profile_Description}
                                                        </p>
                                                    </section>

                                                </section>
                                            )
                                        })
                                    }

                                </section>
                            </section>
                        </section>
                }


                {
                    homedonationdata === null ?
                        null
                        :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {homedonationdata.Home_Donation_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {homedonationdata.Home_Donation_Description}
                                </p>

                                <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                                    {
                                        homegoalscarddata.map((items, index) => {
                                            return (
                                                <section key={index} className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                                    <img src={imgurl + items.Home_Goals_Card_Icon} alt="" className='m-auto' />
                                                    <p className='my-[5px] text-[20px] font-[600]'>
                                                        {items.Home_Goals_Heading}
                                                    </p>
                                                    <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                                        Donate Now
                                                    </button>
                                                </section>
                                            )
                                        })
                                    }

                                </section>
                            </section>
                        </section>
                }

                <Footer />
            </section >
        </>
    )
}
