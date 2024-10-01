import Image from 'next/image';
import React from 'react';
import { footerData } from '../data/FooterData';

const Footer = () => {
    return (
        <div className='bg-[#F8F7F5] pt-[72px] pb-6'>
            <div className='w-[1200px] mx-auto grid grid-cols-4 gap-5'>
                <div className='col-span-2'>
                    <Image src="/images/logo.webp" alt='loading' width={150} height={60} />
                    <p className='text-gray-500 font-normal mt-4'>All the latest news and creative articles are available at our
                        news portal to encourage inspiration and critical thinking.
                    </p>
                </div>

                <div className='col-span-1'>
                    <h2 className='text-xl font-semibold tracking-wide uppercase'>Categories</h2>
                    <ul>
                        {footerData[0]?.categories?.map((categori,categoriId)=>(
                            <li key={categoriId} className='mt-5'>
                              <div className='mb-3 text-sm font-medium text-gray-500 cursor-pointer'>
                                {categori?.name}
                              </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Footer;