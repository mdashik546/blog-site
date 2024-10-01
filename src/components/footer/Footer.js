import Image from 'next/image';
import React from 'react';
import { footerData } from '../data/FooterData';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#F8F7F5] pt-[72px] '>
            <div className='w-[1200px] mx-auto'>
                <div className=' grid grid-cols-5 gap-10'>
                    <div className='col-span-2'>
                        <Image src="/images/logo.webp" alt='loading' width={150} height={60} />
                        <p className='text-gray-500 text-sm font-normal mt-4'>All the latest news and creative articles are available at our
                            news portal to encourage inspiration and critical thinking.
                        </p>
                    </div>

                    <ul className='col-span-1'>
                        <h2 className='text-xl font-semibold tracking-wide uppercase'>Categories</h2>
                        <li>
                            {footerData[0]?.categories?.map((categori, categoriId) => (

                                <div key={categoriId} className='mb-3 mt-5 text-sm font-medium text-gray-500 cursor-pointer hover:text-[#E93314] duration-300'>
                                    {categori?.name}
                                </div>

                            ))}
                        </li>

                    </ul>
                    <ul className='col-span-1'>
                        <h2 className='text-xl font-semibold tracking-wide uppercase'>Links</h2>
                        <li>
                            {footerData[0]?.links?.map((link, linkID) => (

                                <div key={linkID} className='mb-3 mt-5 text-sm font-medium text-gray-500 cursor-pointer hover:text-[#E93314] duration-300'>
                                    {link?.name}
                                </div>

                            ))}
                        </li>

                    </ul>
                    <ul className='col-span-1'>
                        <h2 className='text-xl font-semibold tracking-wide uppercase'>Follow Us</h2>
                        <li className='flex gap-3'>
                            {footerData[0]?.followUs?.map((Icon, followUsID) => (

                                <Link href={Icon?.link} target='_blank' key={followUsID} className='bg-[#F8F7F5] shadow-xs size-10 border flex items-center justify-center rounded-full mt-5 text-sm  text-gray-500 cursor-pointer hover:text-[#E93314] duration-300'>
                                    {Icon?.icon}
                                </Link>

                            ))}
                        </li>
                    </ul>
                </div>
                <div className='border-b mt-10'></div>
                <div className='py-7'>
                    <p> <Link className='text-[#E93314]' href={''}>Mohammed Ashik</Link> <span className='text-gray-500'>© 2024. All Rights Reserved.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;