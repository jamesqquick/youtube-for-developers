import React from 'react';

export default function ResumeMissingSomething() {
    return (
        <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
            <div className="md:grid grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                        Resume Missing Something?
                    </h1>
                    <p>
                        Words on a resume are just that, words. They don't prove
                        that you are any of those things. However, successfully
                        explaining technical concepts in a video proves several
                        things to a hiring manager.
                    </p>
                    <ul>
                        <li>
                            <span className="mr-3 text-2xl">🎤</span> you
                            communicate well
                        </li>
                        <li>
                            <span className="mr-3  text-2xl">💻</span> you've
                            got technical chops
                        </li>
                        <li>
                            <span className="mr-3  text-2xl">📖</span> you enjoy
                            learning
                        </li>
                    </ul>
                </div>
                <img
                    src="./resume.png"
                    alt="Resume"
                    className="  mx-auto mb-10 md:mb-0 hidden md:inline-block"
                    id="coverImage"
                />
            </div>
        </div>
    );
}
