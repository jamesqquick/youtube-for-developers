import React from 'react';

export default function FAQs() {
    return (
        <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
            <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                FAQs
            </h1>
            <ul>
                <li>
                    <div>
                        <h3 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
                            What's included?
                        </h3>
                        <p>
                            Your purchase includes the{' '}
                            <strong>entire ~50 page eBook</strong> with lifetime
                            updates. You will also get access to an{' '}
                            <strong>exclusive Q&A stream</strong> where you can
                            ask your own follow up questions!
                        </p>
                    </div>
                </li>

                <li>
                    <div>
                        <h3 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
                            How do I login and view the download?
                        </h3>
                        <p>
                            You can login at{' '}
                            <a
                                href="https://www.learn.jamesqquick.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                learn.jamesqquick.com
                            </a>
                            . Use the login button in the top right.
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
                            Other questions
                        </h3>
                        <p>
                            Feel free to reach out in chat or send me an email
                            at <strong>me@jamesqquick.com</strong>.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
