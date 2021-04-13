import React from 'react';

export default function ResumeMissingSomething() {
    return (
        <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
            <div className="md:grid grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                        Make Your Resume Stand Out!
                    </h1>
                    <p>
                        Creating YouTube videos proves that you have skills that
                        other developers don't! Let your videos speak for
                        themselves.
                    </p>
                    <ul>
                        <li className="border shadow-md rounded-md flex items-center space-x-2">
                            <span className="bg-blue-700 text-blue-100 py-2 px-4 rounded-l-md">
                                1.
                            </span>
                            <p className="mb-0 font-bold">
                                You're a strong communicator
                            </p>
                        </li>
                        <li className="border shadow-md rounded-md flex items-center space-x-2">
                            <span className="bg-blue-700 text-blue-100 py-2 px-4 rounded-l-md">
                                2.
                            </span>
                            <p className="mb-0 font-bold">
                                You have technical knowledge
                            </p>
                        </li>
                        <li className="border shadow-md rounded-md flex items-center space-x-2">
                            <span className="bg-blue-700 text-blue-100 py-2 px-4 rounded-l-md">
                                3.
                            </span>
                            <p className="mb-0 font-bold">
                                You can teach and lead others
                            </p>
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
