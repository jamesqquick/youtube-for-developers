import React from 'react';

export default function Instructor() {
    return (
        <div className="md:grid grid-cols-2 gap-10 items-center">
            <img
                src="./me.png"
                alt="YouTube For Developers Cover Image"
                className="rounded-lg shadow-lg mx-auto mb-10 md:mb-0"
            />
            <div className="">
                <h1 className="text-4xl font-bold leading-snug text-gray-800">
                    Hi, I'm James!
                </h1>
                <p>
                    I'm a developer, speaker, and teacher with a passion for web
                    development, design, and developer tools. I have taught tens
                    of thousands of students online/in-person and am excited to
                    share with you.
                </p>
                <p>
                    In my spare time, I run a YouTube channel, play co-ed soccer
                    with my wife, spend time with my dogs, and can solve a
                    Rubik's cube in under two minutes.
                </p>
            </div>
        </div>
    );
}
