import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Footer } from '../../../common/Footer'
import { apiurl } from '../../../apiurl/Apiurl'
import { Logo } from '../../../common/Logo'
import { FixedOptionHeader } from '../../../common/FixedOptionHeader'
import { ContactInfo } from '../../../common/ContactInfo'
import toast, { Toaster } from 'react-hot-toast'
import * as Yup from 'yup'
import { useFormik } from 'formik'
export function Contact() {
    let [contactbannerdata, setcontactbannerdata] = useState([])
    let [imageurl, setimageurl] = useState([])

    let fetchalldata = async () => {
        try {
            let [contactbanner] = await Promise.all([
                apiurl.get('/admin/view-contact-banner')
            ])
            return {
                contactbannerdata: contactbanner.data.viewdata,
                imgurl: contactbanner.data.imgurl
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
                    setcontactbannerdata(res.contactbannerdata)
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





    let inputname = ["Full_Name", "Phone", "Email", "Message"]
    let inputlabel = ["Full Name", "Phone.no", "Email Address", "Message"]
    let inputtype = ["text", "number", "email", "message"]


    let formik = useFormik({
        initialValues: {
            Full_Name: "",
            Phone: "",
            Email: "",
            Message: ""
        },

        validationSchema: Yup.object().shape({
            Full_Name: Yup.string().required("Full name is required"),
            Email: Yup.string().email("Invalid Email").required("Email is required"),
            Phone: Yup.number().required("Phone number is required"),
            Message: Yup.string().required("Message is required")
        }),

        onSubmit: () => {
            insertdata(formik.values)
        }
    })


    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)

    let insertdata = (value) => {
        try {
            apiurl.post('/admin/send-query', value)
                .then((res) => {

                    if (res.data.Status === 1) {
                        notificationsuccess(res.data.Message)
                    }
                    else {
                        notificationerror(res.data.Message)
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
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className='main m-auto w-[100%]'>
                <Header />
                {
                    contactbannerdata === null ?
                        null :
                        contactbannerdata.map((items, index) => {
                            return (
                                <section key={items} className='about_banner_slides w-[100%] h-[100vh] relative' style={{ background: `url(${imageurl + items.Contact_Banner_Image})`, backgroundSize: "cover" }}>
                                    <FixedOptionHeader />
                                    <section className='bg-[#00000088] w-[100%] h-[100%] flex justify-center items-center'>
                                        <section className='w-[100%] text-center p-3'>.
                                            <section className='w-[120px] m-auto'>
                                                <Logo />
                                            </section>
                                            <p className='text-white text-[30px] font-[700]'>{items.Contact_Banner_Heading}</p>
                                            <p className='text-white text-[18px]'>{items.Contact_Banner_Description}</p>
                                        </section>
                                    </section>
                                </section>
                            )
                        })
                }

                <section className='w-[100%] py-[20px] px-[10px]'>
                    <section className='contact_section w-[100%] flex justify-between'>
                        <section className='w-[48%]'>
                            <section className='w-[130px] m-auto'>
                                <Logo />
                                <p className=' text-center font-[700] text-[30px]'>RCMICCI</p>
                            </section>
                            <section className='my-[25px] text-[16px] font-[500]'>
                                <p>If you have questions about our projects, ideas for collaboration, or want to know how you can make a difference, we’re here to help. Our team is ready to provide information, guide you through ways to get involved, and listen to your thoughts and feedback.</p>
                            </section>

                            <section className='my-[15px] text-[16px] font-[500]'>
                                <ContactInfo />
                            </section>
                        </section>
                        <section className='w-[48%]'>
                            <p className=' font-[700] text-[25px]'>
                                Contact Us
                            </p>
                            <section className=''>
                                <form onSubmit={formik.handleSubmit}>
                                    {
                                        inputname.map((items, index) => {
                                            return (
                                                <div key={index} className='mb-[10px]'>
                                                    <label className='font-[600]'>{inputlabel[index]}</label>
                                                    {
                                                        inputtype[index] !== "message" ?
                                                            <input type={inputtype[index]} name={items} className='border-[2px] mt-1 border-[#000000] w-[100%] p-2 rounded-[10px] ' onChange={(e) => formik.setFieldValue(inputname[index], e.target.value)} /> :
                                                            <textarea name={items} className='border-[2px] h-[200px] mt-1 border-[#000000] w-[100%] p-2 rounded-[10px] ' onChange={(e) => formik.setFieldValue(inputname[index], e.target.value)} />
                                                    }

                                                </div>
                                            )
                                        })
                                    }

                                    <button className='bg-[black] text-[white] font-[600] w-[100%] py-3 rounded-[10px]'>Submit</button>

                                </form>
                            </section>
                        </section>
                    </section>
                </section>
                <Footer />
            </section >
            <Toaster />
        </>
    )
}
