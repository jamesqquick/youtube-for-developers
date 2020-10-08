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
        <div>
            <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                Testimonials
            </h1>
            {quotes.map((testimonial) => (
                <div className="md:flex space-x-10 items-center mb-10">
                    <img
                        src={testimonial.img}
                        alt="YouTube For Developers Cover Image"
                        className="rounded-full shadow-lg mx-auto mb-10 md:mb-0 testimonial-img"
                        id="coverImage"
                    />
                    <div className="">
                        <h2 className="text-2xl font-bold leading-snug text-gray-800">
                            {testimonial.name}
                        </h2>
                        <p>{testimonial.quote}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
