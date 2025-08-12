import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Footer } from '../../../common/Footer'
import { apiurl } from '../../../apiurl/Apiurl'
import { Logo } from '../../../common/Logo'
import { FixedOptionHeader } from '../../../common/FixedOptionHeader'

export function NewsEvents() {
    let [newsbannerdata, setnewsbannerdata] = useState([])
    let [newsparagraph, setnewsparagraph] = useState([])
    let [imageurl, setimageurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [newsbanner, newsparagraphsection] = await Promise.all([
                apiurl.get('/admin/view-news-banner-section'),
                apiurl.get('/admin/view-news'),
            ])
            return {
                newsbannerdata: newsbanner.data.viewdata,
                newsparagraphsectiondata: newsparagraphsection.data.viewdata,
                imgurl: newsbanner.data.imgurl
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
                    setnewsbannerdata(res.newsbannerdata)
                    setnewsparagraph(res.newsparagraphsectiondata)
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
                    newsbannerdata === null ?
                        null :
                        newsbannerdata.map((items, index) => {
                            return (
                                <section key={items} className='about_banner_slides w-[100%] h-[100vh] relative' style={{ background: `url(${imageurl + items.News_Banner_Image})`, backgroundSize: "cover" }}>
                                    <FixedOptionHeader />
                                    <section className='bg-[#00000088] w-[100%] h-[100%] flex justify-center items-center'>
                                        <section className='w-[100%] text-center p-3'>.
                                            <section className='w-[120px] m-auto'>
                                                <Logo />
                                            </section>
                                            <p className='text-white text-[30px] font-[700]'>{items.News_Banner_Heading}</p>
                                            <p className='text-white text-[18px]'>{items.News_Banner_Description}</p>
                                        </section>
                                    </section>
                                </section>
                            )
                        })
                }

                <section className='w-[100%] py-[20px] px-[10px]'>
                    <section className='w-[100%] mb-[20px] uppercase text-center'>
                        <h1 className='text-[30px] font-[700]'>News & Events</h1>
                    </section>
                    {
                        newsparagraph.length === 0 ? null
                            :
                            newsparagraph.map((items, index) => {
                                return (
                                    <section key={index}>
                                        <section className='w-[100%] flex justify-between py-[50px] border-b-[1px] border-[black]'>
                                            {
                                                items.About_Image === null ?
                                                    <section className='w-[100%] border-[1px] border-[grey]'>
                                                        <p className='text-[25px] font-[600] capitalize mb-[5px]'>{items.News_Heading}</p>
                                                        <p>
                                                            {items.News_Description}
                                                        </p>
                                                    </section>
                                                    :

                                                    index % 2 === 0 ?
                                                        <section className='about_content_left w-[100%] flex justify-between'>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.News_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                            <section className='w-[calc(100%-420px)]'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.News_Heading}</p>
                                                                <p style={{ whiteSpace: "pre-wrap", }}>
                                                                    {items.News_Description}
                                                                </p>
                                                                {
                                                                    items.News_Additional_Links !== "" ?
                                                                        <div>
                                                                            <button className='w-[180px] h-[50px] rounded-[30px] font-[600] border-[1px] bg-[black] text-white mt-[20px]' >
                                                                                <a className='w-[100%] h-[100%]' href={items.News_Additional_Links}>Additional Links</a>
                                                                            </button>
                                                                        </div> :
                                                                        null
                                                                }

                                                            </section>
                                                        </section>
                                                        :
                                                        <section className='about_content_right w-[100%] flex justify-between'>
                                                            <section className='w-[calc(100%-420px)] text-end'>
                                                                <p className='text-[25px] font-[600] capitalize my-[5px]'>{items.News_Heading}</p>
                                                                <p style={{ whiteSpace: "pre-wrap", }}>
                                                                    {items.News_Description}
                                                                </p>
                                                                {
                                                                    items.News_Additional_Links !== "" ?
                                                                        <div>
                                                                            <button className='w-[180px] h-[50px] rounded-[30px] font-[600] border-[1px] bg-[black] text-white mt-[20px]' >
                                                                                <a className='w-[100%] h-[100%]' href={items.News_Additional_Links}>Additional Links</a>
                                                                            </button>
                                                                        </div> :
                                                                        null
                                                                }

                                                            </section>
                                                            <section className=' w-[400px]'>
                                                                <img src={imageurl + items.News_Image} alt="" className='w-[100%] rounded-[10px]' />
                                                            </section>
                                                        </section>

                                            }


                                        </section>
                                    </section>
                                )
                            })
                    }
                </section>
                <Footer />
            </section >
        </>
    )
}
