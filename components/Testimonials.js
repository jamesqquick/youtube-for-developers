import React from 'react';

export default function Testimonials() {
    const quotes = [
        {
            name: 'Jesse Hall (codeSTACKr)',
            quote: `I believe that every developer should try to teach in some way. Be that mentoring, a blog, a YouTube channel, etc. The benefits to you are amazing! If you want a guide to starting a YouTube channel, look no further! I was given the privilege of previewing this eBook and James has provided everything you need to know to set you up for success! Don't wait. Get your YouTube channel started today!`,
            img: './jesse.png',
        },
        {
            name: 'Brad Garropy',
            quote: `Pressing publish on that first video is always tough, but James makes everything else so easy. He covers everything that took me over a year to learn in this short book. From gear, to content, to monetization strategies, you'll have what you need to create a successful YouTube channel!`,
            img: './brad.jpg',
        },
    ];
    return (
        <div className="xl:flex items-stretch pt-24 pb-12 xl:pb-0 bg-gray-300">
            <div className="text-center xl:w-1/3 flex relative items-center justify-center xl:py-24  ">
                <h1 className="text-4xl uppercase font-bold leading-snug text-gray-800 mb-12 xl:mb-0 xl:p-4">
                    What People Are Saying
                </h1>
                <div className="absolute  w-48 xl:h-full right-0 transform translate-x-24"></div>
            </div>
            <div className=" px-8 xl:py-24 xl:w-2/3 z-10 space-y-12 relative">
                {quotes.map((testimonial) => (
                    <div className="md:flex space-x-10 items-center border p-8 shadow-2xl rounded-lg bg-gray-100">
                        <img
                            src={testimonial.img}
                            alt="YouTube For Developers Cover Image"
                            className="rounded-full shadow-lg mx-auto mb-10 md:mb-0 testimonial-img"
                            id="coverImage"
                        />
                        <div className="">
                            <h2 className="text-2xl font-bold leading-snug text-gray-800 mb-2">
                                {testimonial.name}
                            </h2>
                            <p className="relative italic mb-4">
                                <span className="absolute top-0 left-0 transform -translate-x-10 text-brand-700 -translate-y-4 text-6xl font-bold">
                                    "
                                </span>
                                {testimonial.quote}
                                <span className="absolute  transform text-brand-700 -translate-y-6 text-6xl font-bold">
                                    "
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
