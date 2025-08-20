import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Footer } from '../../../common/Footer'
import { apiurl } from '../../../apiurl/Apiurl'
import { Logo } from '../../../common/Logo'
import { FixedOptionHeader } from '../../../common/FixedOptionHeader'
import { QuickLinks } from './QuickLinks'


export function PrivacyPolicy() {
    let [privacybannerdata, setprivacybannerdata] = useState([])
    let [privacyparagraph, setprivacyparagraph] = useState([])
    let [privacyextraparagraph, setprivacyextraparagraph] = useState([])
    let [imageurl, setimageurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [privacybanner, privacyparagraphsection, extraprivacyparagraphsection] = await Promise.all([
                apiurl.get('/admin/view-privacy-banner-section'),
                apiurl.get('/admin/view-privacy-paragraph-section'),
                apiurl.get('/admin/view-privacy-extra-paragraph')
            ])
            return {
                privacybannerdata: privacybanner.data.viewdata,
                privacyparagraphsectiondata: privacyparagraphsection.data.viewdata,
                extraprivacyparagraphsectiondata: extraprivacyparagraphsection.data.viewdata,
                imgurl: privacybanner.data.imgurl
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
                    setprivacybannerdata(res.privacybannerdata)
                    setprivacyparagraph(res.privacyparagraphsectiondata)
                    setprivacyextraparagraph(res.extraprivacyparagraphsectiondata)
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
                    privacybannerdata === null ?
                        null :
                        privacybannerdata.map((items, index) => {
                            return (
                                <section key={items} className='about_banner_slides w-[100%] h-[100vh] relative' style={{ background: `url(${imageurl + items.Privacy_Banner_Image})`, backgroundSize: "cover" }}>
                                    <FixedOptionHeader />
                                    <section className='bg-[#00000088] w-[100%] h-[100%] flex justify-center items-center'>
                                        <section className='w-[100%] text-center p-3'>.
                                            <section className='w-[120px] m-auto'>
                                                <Logo />
                                            </section>
                                            <p className='text-white text-[30px] font-[700]'>{items.Privacy_Banner_Heading}</p>
                                            <p className='text-white text-[18px]'>{items.Privacy_Banner_Description}</p>
                                        </section>
                                    </section>
                                </section>
                            )
                        })
                }

                <section className='w-[100%] py-[20px] px-[10px]'>
                    {
                        privacyparagraph.length === 0 ? null :
                            <section className='w-[100%] mb-[20px] uppercase text-center'>
                                <h1 className='text-[30px] font-[700]'>Privacy Policy</h1>
                            </section>
                    }
                    {
                        privacyparagraph.length === 0 ? null
                            :
                            privacyparagraph.map((items, index) => {
                                return (
                                    <section key={index}>
                                        <section className='w-[100%] flex justify-between mb-[30px]'>
                                            {
                                                items.About_Image === null ?
                                                    <section className='w-[100%] border-[1px] border-[grey]'>
                                                        <p className='text-[25px] font-[600] capitalize mb-[5px]'>{items.Privacy_Heading}</p>
                                                        <p>
                                                            {items.Privacy_Description}
                                                        </p>
                                                    </section>
                                                    :

                                                    index % 2 === 0 ?
                                                        <section className='about_content_left w-[100%] flex justify-between'>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.Privacy_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                            <section className='w-[calc(100%-420px)]'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.Privacy_Heading}</p>
                                                                <p>
                                                                    {items.Privacy_Description}
                                                                </p>
                                                            </section>
                                                        </section>
                                                        :
                                                        <section className='about_content_right w-[100%] flex justify-between text-end'>
                                                            <section className='w-[calc(100%-420px)]'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.Privacy_Heading}</p>
                                                                <p>
                                                                    {items.Privacy_Description}
                                                                </p>
                                                            </section>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.Privacy_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                        </section>

                                            }


                                        </section>
                                        <section className='w-[100%] mb-[10px]'>
                                            {
                                                privacyextraparagraph.length === 0 ? null :
                                                    privacyextraparagraph.map((value, ind) => {
                                                        return (
                                                            <section className='w-[100%]' key={ind}>
                                                                {
                                                                    value.Privacy_Section_Id !== items._id ?
                                                                        null :
                                                                        <p className='mb-[20px]'>
                                                                            {value.Privacy_Paragraph}
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
