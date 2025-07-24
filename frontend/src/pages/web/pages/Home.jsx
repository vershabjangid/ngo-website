import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import profile from '../../../images/Human-Resources-Businessman-Clock--Streamline-Ultimate (1).png'
import profilepicture from '../../../images/Gemini_Generated_Image_3qpdbz3qpdbz3qpd 1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Logo } from '../../../common/Logo'
import { Footer } from '../../../common/Footer'
import { QuickLinks } from '../../../pages/web/pages/QuickLinks'
import { Header } from '../../../common/Header'
import Slider from "react-slick";
import banner from '../../../images/5157430_32406.jpg'
export function Home() {
    // navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude)
    //     console.log(position.coords.longitude)

    // })

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };


    return (
        <>
            <section className='main m-auto w-[100%]'>
                <Header />

                <section className='home_banner w-[100%] bg-[grey] relative'>
                    <img src={banner} alt="" className='' />
                    <div className='banner_menubar absolute top-[20px] w-[100%] z-[9999]'>
                        <ul className='w-[100%] flex justify-evenly text-white'>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                    <div className='w-[100%] h-[100%] absolute top-0 bg-[#00000050] flex items-center justify-center'>
                        <Slider {...settings} className='w-[100%]'>
                            {/* <div className='w-[100%] h-[100%] absolute z-[999] border-[1px] border-[red] top-0 bg-[#00000050] flex justify-center items-center'> */}
                            <div className='w-[100%] text-white text-center'>
                                <div className='home_logo_section w-[150px] m-auto'>
                                    <Logo />
                                </div>
                                <p className='home_heading text-[35px] font-[600] w-[100%] m-auto text-center'>Transforming Rural Communities</p>
                                <p className='home_sub_heading text-[25px] w-[100%]'>Our innovative teaching methods make learning  accessible, engaging, and impactful for all.</p>
                            </div>
                            {/* </div> */}
                        </Slider>
                    </div>
                </section>
                <QuickLinks />

                <section className='home_about_us w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[30%] flex justify-center items-center'>
                        <section className='w-[300px]'>
                            <Logo />
                        </section>
                    </section>
                    <section className='w-[70%] uppercase'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            About RESERVE CATEGORY & MINORITY INDIAN CHAMBER OF COMMERCE & INDUSTRY
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            The Reserve Category & Minority Cell of the Indian Chamber of Commerce & Industry (ICCI) is a dedicated initiative aimed at uplifting individuals from Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and minority communities through inclusive development and economic empowerment. As a non-governmental organization, the cell focuses on supporting marginalized groups by facilitating access to livelihood opportunities, government welfare schemes, capacity-building programs, entrepreneurship training, and social support services. Through advocacy, collaboration, and grassroots engagement, it works to bridge social and economic gaps and promote equal participation in the mainstream economy.
                        </p>

                        <Link className='w-[160px] h-[50px] rounded-[30px] bg-[black] text-white font-[600] flex items-center justify-center'>
                            Know More <FiArrowRight className='text-[20px] ms-3' />
                        </Link>
                    </section>
                </section>


                <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[100%] uppercase text-center'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            Goals OF RESERVE CATEGORY & MINORITY INDIAN CHAMBER OF COMMERCE & INDUSTRY
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            The Reserve Category & Minority Cell of the Indian Chamber of Commerce & Industry (ICCI) works to uplift and support people from SC, ST, OBC, and minority communities. As an NGO, we focus on helping individuals access opportunities through skill training, entrepreneurship support, and government schemes. Our goal is simple — to create equal chances for growth, dignity, and success for everyone, no matter their background.
                        </p>

                        <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>

                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <p className='text-[13px]'>
                                    Empowered youth ignite change, shaping a brighter, stronger tomorrow together
                                </p>
                            </section>
                        </section>
                    </section>
                </section>


                <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[100%] uppercase text-center'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            Our Management Body
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            Our management body is a team of visionary leaders committed to transparency, innovation, and impact. Through strategic planning, ethical practices, and collaborative decision-making, they drive sustainable growth and meaningful change. Their dedication ensures that every initiative aligns with our mission to serve, empower, and uplift communities with purpose.
                        </p>

                        <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>


                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>


                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>

                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>

                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>
                        </section>
                    </section>
                </section>


                <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[100%] uppercase text-center'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            Our Gallery
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            Our management body is a team of visionary leaders committed to transparency, innovation, and impact. Through strategic planning, ethical practices, and collaborative decision-making, they drive sustainable growth and meaningful change. Their dedication ensures that every initiative aligns with our mission to serve, empower, and uplift communities with purpose.
                        </p>

                        <section className='w-[100%] my-[10px] flex flex-wrap py-2 justify-between'>
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
                                <SwiperSlide>
                                    <div className='w-[100%] flex justify-center items-center'>
                                        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[100%] flex justify-center items-center'>
                                        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[100%] flex justify-center items-center'>
                                        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[100%] flex justify-center items-center'>
                                        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </section>
                </section>





                <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[100%] uppercase text-center'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            Our Team Member
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            Our management body is a team of visionary leaders committed to transparency, innovation, and impact. Through strategic planning, ethical practices, and collaborative decision-making, they drive sustainable growth and meaningful change. Their dedication ensures that every initiative aligns with our mission to serve, empower, and uplift communities with purpose.
                        </p>

                        <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>


                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>


                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>

                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>

                            <section className='w-[300px] border-[2px] border-[black] p-[10px] py-[20px] rounded-[20px] mb-[20px]'>
                                <section className='w-[150px] h-[150px] m-auto border-[1px] border-black rounded-[50%] overflow-hidden'>
                                    <img src={profilepicture} alt="" className='m-auto' />
                                </section>

                                <p className=' mt-[20px]  text-[20px] font-[600]'>
                                    Kanchan Maurya
                                </p>
                                <p className='text-[13px] mb-[10px]'>
                                    (Designation)
                                </p>
                                <p className='text-[15px]'>
                                    Kanchan Maurya, Founder President – The visionary force driving empowerment, equity, and grassroots change.
                                </p>
                            </section>
                        </section>
                    </section>
                </section>


                <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                    <section className='w-[100%] uppercase text-center'>
                        <h2 className='home_heading text-[30px] font-[700]'>
                            Donate For Smile
                        </h2>
                        <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                            The Reserve Category & Minority Cell of the Indian Chamber of Commerce & Industry (ICCI) works to uplift and support people from SC, ST, OBC, and minority communities. As an NGO, we focus on helping individuals access opportunities through skill training, entrepreneurship support, and government schemes. Our goal is simple — to create equal chances for growth, dignity, and success for everyone, no matter their background.
                        </p>

                        <section className='w-[100%] my-[10px] flex justify-evenly flex-wrap py-2'>
                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                    Donate Now
                                </button>
                            </section>

                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                    Donate Now
                                </button>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                    Donate Now
                                </button>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                    Donate Now
                                </button>
                            </section>


                            <section className='w-[260px] border-[2px] border-[black] p-[10px] rounded-[20px] mb-[20px]'>
                                <img src={profile} alt="" className='m-auto' />
                                <p className='my-[5px] text-[20px] font-[600]'>
                                    youth empowernment
                                </p>
                                <button className='text-[15px] mt-2 bg-[black] text-[white] py-3 px-5 rounded-[20px] font-[600]'>
                                    Donate Now
                                </button>
                            </section>
                        </section>
                    </section>
                </section>

                <Footer />
            </section>
        </>
    )
}
