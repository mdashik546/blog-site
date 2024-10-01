import React from 'react';
import { blogData } from '../data/BlogData';
import Image from 'next/image';
import AnimateButton from '../animateButton/AnimateButton';
import { FaRegComments } from 'react-icons/fa6';
import Link from 'next/link';
import BlogAnimation from '../blogAnimation/BlogAnimation';

const BlogSection = () => {
    return (
        <div className={`mt-10  grid grid-cols-3  gap-5  `}>

            {blogData?.map((blog, index) => (
                <div key={blog?.id} className={`group relative w-full cursor-pointer  ${index === 0 ? "col-span-2 row-span-2 " : "col-span-1 row-span-1"}`} >
                    <div className=' overflow-hidden '>
                        <Image src={blog?.image} alt='loading' width={800} height={500} className=' w-full h-full  group-hover:scale-110 duration-1000  ease-in-out ' />
                    </div>
                    <div className={`  ${blog?.action && "absolute inset-0 bg-black/60 text-white px-8 "} `}
                     >
                        <div className={` ${blog?.action && "absolute bottom-7"} flex flex-col gap-y-2.5`}>

                            <div className='mt-2'>
                                {blog?.content && <AnimateButton animateButton={blog?.content} />}
                            </div>

                            <Link href={'/'} className='opacity-50 uppercase text-xs hover:text-[#E93314]  cursor-pointer duration-300 font-medium'>{blog?.Technology}</Link>

                            <div>
                                <BlogAnimation title={blog?.title} des={blog?.author} date={blog?.date} comment={blog?.comments} alignment='item-start'>
                                </BlogAnimation>
                            </div>

                        </div>
                    </div>

                </div>


            ))}
        </div>
    );
};

export default BlogSection;