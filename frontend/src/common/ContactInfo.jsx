import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationPin, FaMobile } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

export function ContactInfo() {
    return (
        <>
            <section className=' lowercase'>
                <ul className=' leading-10'>
                    <li className='flex items-center'>
                        <IoIosMail className='me-2  text-[20px]' /> tfgtrust@gmail.com
                    </li>

                    <li className='flex items-center'>
                        <IoIosMail className='me-2  text-[20px]' />  tfgtrust@gmail.com
                    </li>

                    <li className='flex items-center'>
                        <FaPhoneAlt className='me-2  text-[20px]' /> (+91) 9810285469
                    </li>

                    <li className='flex items-center'>
                        <FaMobile className='me-2  text-[20px]' />  (+91) 11-35565726
                    </li>

                    <li className='flex items-start leading-10'>
                        <FaLocationPin className='me-2 text-[20px] mt-2' /> 523, BLOCK-C, SECTOR 19, Rohini, New Delhi - 110089, India
                    </li>
                </ul>
            </section>
        </>
    )
}
