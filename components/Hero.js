import React from 'react';

export default function Hero({ title }) {
    return (
        <div className="md:grid grid-cols-2 gap-10 items-center">
            <img
                src="./cover.jpg"
                alt="YouTube For Developers Cover Image"
                className="rounded-lg shadow-lg mx-auto mb-10 md:mb-0"
                id="coverImage"
            />
            <div className="">
                <h1 className="text-4xl font-bold leading-snug text-gray-800">
                    {title ? title : 'Take Your Career to the Next Level!'}
                </h1>
                <p>
                    Ready to start creating YouTube videos while padding your
                    resume, building your brand, and learning a lot along the
                    way?
                </p>
                <a
                    href="https://learn.jamesqquick.com/developers-guide-to-starting-a-youtube-channel/buy"
                    rel="noopener noreferrer"
                    className="bg-brand px-5 py-3 uppercase text-brand-100 rounded-md 
                                    mb-2 inline-block no-underline text-center w-full lg:w-auto font-normal
                                    hover:-translate-x-2 hover-md hover:shadow-2xl hover:bg-brand-600"
                >
                    Buy for $9.99
                </a>
            </div>
        </div>
    );
}
