import React from 'react';

export default function WhatYoullLearn() {
    return (
        <div className="py-20 bg-brand-700 text-brand-100">
            <div className=" container mx-auto max-w-8xl lg:flex items-center lg:space-x-10 px-8">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold leading-snug  mb-6">
                        What You'll Learn?
                    </h1>
                    <p className="text-brand-100 leading-loose">
                        Creating high-quality YouTube videos is not something
                        that happens overnight, but we all have to start
                        somewhere. In this eBook, I'll share the things I've
                        learned while running a YouTube channel for 5+ years.
                        Here's what you can expect.
                    </p>
                </div>
                <ul className="lg:w-1/2 ml-0">
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        How to overcome imposter syndrome
                    </li>
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        How YouTube videos can benefit your career
                    </li>
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        What to expect (views, subscribers, etc.)
                    </li>
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        Recommended hardware and software
                    </li>
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        How to optimize your videos for growth
                    </li>
                    <li className="font-normal bg-brand-800 py-3 px-4 rounded-md shadow-lg text-brand-100 text-2xl">
                        Tips and tricks for making money
                    </li>
                </ul>
            </div>
        </div>
    );
}
