import React from 'react';
import BlogAnimation from '../blogAnimation/BlogAnimation';
import Image from 'next/image';

const Material = () => {
    const materialData = [
        {
            id: 1,
            title: "Exploring the Depths of the Ocean",
            author: "Marine Explorer",
            date: "10 AUG 2023",
            content: "Intelligence",
            image: "/images/post-ai18.jpg",
            comments: 12,
        },
        {
            id: 2,
            title: "The Future of Artificial Intelligence",
            author: "Tech Enthusiast",
            date: "22 SEP 2023",
            content: "Intelligence",
            image: "/images/post-ai19.jpg",
            comments: 34,
        },
    ];

    return (
        <div className=' my-16'>
            <div className='flex items-center justify-center text-center gap-x-5'>
                <div className='w-5/12 border-y pb-1 '></div>
                <div className='w-2/12'>
                    <h1 className='text-[32px] font-semibold'>Hot Material</h1>
                    <p className='text-gray-500 pt-0.5 text-base font-normal'>Articles Of The Day
                    </p>
                </div>
                <div className='w-5/12 border-y pb-1 '></div>
            </div>
            <div className='flex flex-row mt-10 gap-5 '>
                {materialData?.map((material) => (
                    <div key={material?.id} className={`z-10 group ${material?.id === 1 ? "w-4/12" : " w-8/12"}`}>
                        <div className='h-[450px]  overflow-hidden'>
                            <Image src={material?.image} width={1000} height={500} alt='loading' className='h-full w-full transition-transform duration-1000  ease-in-out group-hover:scale-110  object-cover cursor-pointer  ' />
                        </div>
                        <div className='mt-4 '>
                            <BlogAnimation title={material?.title}
                                des={material?.author}
                                date={material?.date}
                                comment={material?.comments}
                                alignment="justify-center"
                                textSize={`text-center `} 
                                colorChange={`text-gray-400`}
                                dateSection={`text-gray-400`}
                                />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Material;