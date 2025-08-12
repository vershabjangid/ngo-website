import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

export function ContactInfo() {
    return (
        <>
            <section className=''>
                <ul className=' leading-10'>
                    <li className='flex items-center'>
                        <IoIosMail className='me-2 ' /> rcmicci@gmail.com
                    </li>

                    <li className='flex items-center'>
                        <FaPhoneAlt className='me-2' /> +91 9718277194
                    </li>

                    <li className='flex items-center'>
                        <FaLocationPin className='me-2' />  316, Park View Plaza, 32 Park Area, Ajmal Khan Road Karol Bagh, New Delhi-110005
                    </li>
                </ul>
            </section>
        </>
    )
}
