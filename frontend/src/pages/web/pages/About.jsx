import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Footer } from '../../../common/Footer'
import { apiurl } from '../../../apiurl/Apiurl'
import { Logo } from '../../../common/Logo'
import { FixedOptionHeader } from '../../../common/FixedOptionHeader'
import { QuickLinks } from './QuickLinks'

export function About() {
    let [aboutbannerdata, setaboutbannerdata] = useState([])
    let [aboutparagraph, setaboutparagraph] = useState([])
    let [aboutextraparagraph, setaboutextraparagraph] = useState([])
    let [imageurl, setimageurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [aboutbanner, aboutparagraphsection, extraaboutparagraphsection] = await Promise.all([
                apiurl.get('/admin/view-about-banner-section'),
                apiurl.get('/admin/view-about-paragraph-section'),
                apiurl.get('/admin/view-about-extra-paragraph')
            ])
            return {
                aboutbannerdata: aboutbanner.data.viewdata,
                aboutparagraphsectiondata: aboutparagraphsection.data.viewdata,
                extraaboutparagraphsectiondata: extraaboutparagraphsection.data.viewdata,
                imgurl: aboutbanner.data.imgurl
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
                    setaboutbannerdata(res.aboutbannerdata)
                    setaboutparagraph(res.aboutparagraphsectiondata)
                    setaboutextraparagraph(res.extraaboutparagraphsectiondata)
                    setimageurl(res.imgurl)
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
                    aboutbannerdata === null ?
                        null :
                        aboutbannerdata.map((items, index) => {
                            return (
                                <section key={items} className='about_banner_slides w-[100%] h-[100vh] relative' style={{ background: `url(${imageurl + items.About_Banner_Image})`, backgroundSize: "cover" }}>
                                    <FixedOptionHeader />
                                    <section className='bg-[#00000088] w-[100%] h-[100%] flex justify-center items-center'>
                                        <section className='w-[100%] text-center p-3'>.
                                            <section className='w-[120px] m-auto'>
                                                <Logo />
                                            </section>
                                            <p className='text-white text-[30px] font-[700]'>{items.About_Banner_Heading}</p>
                                            <p className='text-white text-[18px]'>{items.About_Banner_Description}</p>
                                        </section>
                                    </section>
                                </section>
                            )
                        })
                }

                <section className='w-[100%] py-[20px] px-[10px]'>
                    {
                        aboutparagraph.length === 0 ? null :
                            <section className='w-[100%] mb-[20px] uppercase text-center'>
                                <h1 className='text-[30px] font-[700]'>About Us</h1>
                            </section>
                    }
                    {
                        aboutparagraph.length === 0 ? null
                            :
                            aboutparagraph.map((items, index) => {
                                return (
                                    <section key={index}>
                                        <section className='w-[100%] flex justify-between mb-[30px]'>
                                            {
                                                items.About_Image === null ?
                                                    <section className='w-[100%] border-[1px] border-[grey]'>
                                                        <p className='text-[25px] font-[600] capitalize mb-[5px]'>{items.About_Heading}</p>
                                                        <p>
                                                            {items.About_Description}
                                                        </p>
                                                    </section>
                                                    :

                                                    index % 2 === 0 ?
                                                        <section className='about_content_left w-[100%] flex justify-between'>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.About_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                            <section className='w-[calc(100%-420px)]'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.About_Heading}</p>
                                                                <p>
                                                                    {items.About_Description}
                                                                </p>
                                                            </section>
                                                        </section>
                                                        :
                                                        <section className='about_content_right w-[100%] flex justify-between'>
                                                            <section className='w-[calc(100%-420px)]'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.About_Heading}</p>
                                                                <p>
                                                                    {items.About_Description}
                                                                </p>
                                                            </section>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.About_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                        </section>

                                            }


                                        </section>
                                        <section className='w-[100%] mb-[10px]'>
                                            {
                                                aboutextraparagraph.length === 0 ? null :
                                                    aboutextraparagraph.map((value, ind) => {
                                                        return (
                                                            <section className='w-[100%]' key={ind}>
                                                                {
                                                                    value.About_Section_Id !== items._id ?
                                                                        null :
                                                                        <p className='mb-[20px]'>
                                                                            {value.About_Paragraph}
                                                                        </p>
                                                                }
                                                            </section>
                                                        )
                                                    })
                                            }
                                        </section>
                                    </section>
                                )
                            })
                    }
                     <QuickLinks />
                </section>
                <Footer />
            </section >
        </>
    )
}
