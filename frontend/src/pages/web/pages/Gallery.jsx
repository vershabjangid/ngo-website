import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Footer } from '../../../common/Footer'
import { apiurl } from '../../../apiurl/Apiurl'
import 'swiper/css';
import { FixedOptionHeader } from '../../../common/FixedOptionHeader';
import { Logo } from '../../../common/Logo';
import { QuickLinks } from './QuickLinks';

export function Gallery() {
    let [gallerybannerdata, sethomegallerybannerdata] = useState([])
    let [homegallerydata, sethomegallerydata] = useState([])
    let [homegalleryimagesdata, sethomegalleryimagesdata] = useState([])


    let [imgurl, setimgurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [homegallerybanner, homegallerydata, homegalleryimagesdata] = await Promise.all([
                apiurl.get('/admin/view-gallery-banner-section'),
                apiurl.get('/admin/view-home-gallery'),
                apiurl.get('/admin/view-gallery')
            ])

            return {
                imgurl: homegallerydata.data.imgurl,
                homegallery: homegallerydata.data.viewdata,
                homegalleryimages: homegalleryimagesdata.data.viewdata,
                homegallerybannerdata: homegallerybanner.data.viewdata
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
                    setimgurl(res.imgurl)
                    sethomegallerydata(res.homegallery)
                    sethomegalleryimagesdata(res.homegalleryimages)
                    sethomegallerybannerdata(res.homegallerybannerdata)
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
                    gallerybannerdata === null ?
                        null :
                        gallerybannerdata.map((items, index) => {
                            return (
                                <section key={items} className='about_banner_slides w-[100%] h-[100vh] relative' style={{ background: `url(${imgurl + items.Gallery_Banner_Image})`, backgroundSize: "cover" }}>
                                    <FixedOptionHeader />
                                    <section className='bg-[#00000088] w-[100%] h-[100%] flex justify-center items-center'>
                                        <section className='w-[100%] text-center p-3'>.
                                            <section className='w-[120px] m-auto'>
                                                <Logo />
                                            </section>
                                            <p className='text-white text-[30px] font-[700]'>{items.Gallery_Banner_Heading}</p>
                                            <p className='text-white text-[18px]'>{items.Gallery_Banner_Description}</p>
                                        </section>
                                    </section>
                                </section>
                            )
                        })
                }
                {
                    homegallerydata === null ?
                        null
                        :
                        <section className='w-[100%] py-[20px] px-[20px] border-b-[1px] border-[black] flex'>
                            <section className='w-[100%] uppercase text-center mt-2'>
                                <h2 className='home_heading text-[30px] font-[700]'>
                                    {homegallerydata.Home_Gallery_Heading}
                                </h2>
                                <p className='text-justify my-[10px] mb-[20px] leading-[25px]'>
                                    {homegallerydata.Home_Gallery_Description}
                                </p>

                                <section className='w-[100%] my-[10px] flex flex-wrap py-2 justify-between'>
                                    {
                                        homegalleryimagesdata.length === 0 ?
                                            <div className='text-center w-[100%] font-[600]'>No Data Found</div> :
                                            homegalleryimagesdata.length < 3 ?

                                                <div className='w-[100%] flex justify-evenly items-center'>
                                                    {
                                                        homegalleryimagesdata.map((items, index) => {
                                                            return (
                                                                <img src={imgurl + items.Gallery_Event_Image} alt="" className='w-[300px] h-[300px] rounded-[20px]' />
                                                            )
                                                        })
                                                    }
                                                </div>


                                                :


                                                <div className='w-[100%] flex-wrap flex justify-between'>
                                                    {
                                                        homegalleryimagesdata.map((items, index) => {
                                                            return (
                                                                <section key={index}>
                                                                    {
                                                                        index % 2 === 0 ?
                                                                            <div className='my-4 w-[100%]' key={index}>
                                                                                <div className='gallery_card_section flex w-[100%]'>
                                                                                    <img src={imgurl + items.Gallery_Event_Image} alt="" className='gallery_card_image w-[350px] h-[350px] rounded-[20px]' />
                                                                                    <div className=''>
                                                                                        <div>
                                                                                            <p className='gallery_heading text-start font-[600]  my-3 ms-5 text-[20px]'>
                                                                                                {items.Gallery_Event_Heading}
                                                                                            </p>
                                                                                        </div>

                                                                                        <p className='gallery_paragraph text-start mt-3 ms-5'>
                                                                                            {items.Gallery_Event_Description}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div> :

                                                                            <div className='my-4 w-[100%]' key={index}>
                                                                                <div className='gallery_card_section_reverse flex w-[100%]'>
                                                                                    <div className='w-[100%]'>
                                                                                        <div>
                                                                                            <p className='gallery_heading text-end font-[600]  my-3 me-5 text-[20px]'>
                                                                                                {items.Gallery_Event_Heading}
                                                                                            </p>
                                                                                        </div>

                                                                                        <p className='gallery_paragraph text-end mt-3 me-5'>
                                                                                            {items.Gallery_Event_Description}
                                                                                        </p>
                                                                                    </div>
                                                                                    <img src={imgurl + items.Gallery_Event_Image} alt="" className='gallery_card_image w-[350px] h-[350px] rounded-[20px]' />
                                                                                </div>
                                                                            </div>
                                                                    }
                                                                     <QuickLinks />
                                                                </section>
                                                            )
                                                        })
                                                    }
                                                </div>
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
