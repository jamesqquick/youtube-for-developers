import React from 'react';

export default function YouTubeForMe() {
    return (
        <div>
            <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                What YouTube Has Done For Me
            </h1>
            <img
                className="mt-6 rounded-lg shadow-lg mb-6"
                src="cover-images.jpg"
                alt="YouTube Cover Images"
            />
            <p>
                Creating YouTube videos has forced me to understand programming
                concepts better, learn about marketing and design, build a
                personal brand, and so much more. It takes a lot more than just
                writing a few lines of code.
            </p>

            <blockquote className="text-2xl mb-8 text-gray-800 leading-relaxed font-light border-solid border-l-4 pl-2 border-brand">
                You'll learn more from creating YouTube videos than you ever did
                watching them!
            </blockquote>

            <p>
                My YouTube channel is something I proudly display on my own
                resume as a testament to my skills, hard work, and passion. I
                never would have thought that YouTube would lead to so many
                opportunities, but I don't think the following would have been
                possible without it.
            </p>
            <p>
                Developer Advocate at Auth0 Programming Bootcamp Instructor
                Entrepreneur (selling courses, freelance video creation, etc.)
            </p>
        </div>
    );
}
