import Head from 'next/head';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        const kwesScript = document.createElement('script');
        kwesScript.setAttribute('src', 'https://kwes.io/v2/kwes-script.js');
        kwesScript.setAttribute('defer', 'defer');
        document.head.appendChild(kwesScript);
    }, []);
    return (
        <div>
            <Head>
                <title>YouTube For Developers</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:ital,wght@0,100;1,100&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="">
                <div className="">
                    <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                        <div className="md:grid grid-cols-2 gap-10 items-center">
                            <img
                                src="./cover.jpg"
                                alt="YouTube For Developers Cover Image"
                                className="rounded-lg shadow-lg mx-auto mb-10 md:mb-0"
                                id="coverImage"
                            />
                            <div className="">
                                <h1 className="text-4xl font-bold leading-snug text-gray-800">
                                    YouTube For Developers
                                </h1>
                                <p>
                                    Learn how to start a YouTube channel today
                                    and why it will take your career to the next
                                    level.
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
                    </section>
                    <section className="bg-gray-200">
                        <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                            <div className="md:grid grid-cols-2 gap-8 items-center">
                                <div>
                                    <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                                        Resume Missing Something?
                                    </h1>
                                    <p>
                                        Words on a resume are just that, words.
                                        They don't prove that you are any of
                                        those things. However, successfully
                                        explaining technical concepts in a video
                                        proves several things to a hiring
                                        manager.
                                    </p>
                                    <ul>
                                        <li>
                                            <span className="mr-3 text-2xl">
                                                🎤
                                            </span>{' '}
                                            you communicate well
                                        </li>
                                        <li>
                                            <span className="mr-3  text-2xl">
                                                💻
                                            </span>{' '}
                                            you've got technical chops
                                        </li>
                                        <li>
                                            <span className="mr-3  text-2xl">
                                                📖
                                            </span>{' '}
                                            you enjoy learning
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
                    </section>
                    <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20 ">
                        <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                            What YouTube Has Done For Me
                        </h1>
                        <img
                            className="mt-6 rounded-lg shadow-lg mb-6"
                            src="cover-images.jpg"
                            alt="YouTube Cover Images"
                        />
                        <p>
                            Creating YouTube videos has forced me to understand
                            programming concepts better, learn about marketing
                            and design, build a personal brand, and so much
                            more. It takes a lot more than just writing a few
                            lines of code.
                        </p>

                        <blockquote className="text-2xl mb-8 text-gray-800 leading-relaxed font-light border-solid border-l-4 pl-2 border-brand">
                            You'll learn more from creating YouTube videos than
                            you ever did watching them!
                        </blockquote>

                        <p>
                            My YouTube channel is something I proudly display on
                            my own resume as a testament to my skills, hard
                            work, and passion. I never would have thought that
                            YouTube would lead to so many opportunities, but I
                            don't think the following would have been possible
                            without it.
                        </p>
                        <p>
                            Developer Advocate at Auth0 Programming Bootcamp
                            Instructor Entrepreneur (selling courses, freelance
                            video creation, etc.)
                        </p>
                    </section>
                    <section className="bg-gray-200">
                        <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                            <h1 className="text-4xl font-bold leading-snug text-gray-800 mb-6">
                                What You'll Learn?
                            </h1>
                            <p>
                                Creating high-quality YouTube videos is not
                                something that happens overnight, but we all
                                have to start somewhere. In this eBook, I'll
                                share the things I've learned while running a
                                YouTube channel for 5+ years. Here's what you
                                can expect.
                            </p>
                            <ul>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> How to
                                    overcome imposter syndrome
                                </li>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> The
                                    benefits creating YouTube videos can have on
                                    your career{' '}
                                </li>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> What to
                                    expect (comments, views, subscribers, etc.)
                                </li>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> Recommended
                                    hardware and software
                                </li>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> How to
                                    optimize your videos for visibility
                                </li>
                                <li className="font-normal">
                                    <span className="mr-4">✅</span> Tips and
                                    tricks for growing your YouTube channel and
                                    making money
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                        <h1 className="text-4xl font-bold leading-snug text-gray-800">
                            Have a Burning Question?
                        </h1>
                        <p>
                            Have a question that you think isn't covered in the
                            book? Feel free to ask below!
                        </p>
                        <form
                            className="kwes-form"
                            action="https://kwes.io/api/foreign/forms/efFnn0v1ODclogPLTk0c"
                            no-reload
                            success-message="Thanks for submitting!"
                        >
                            <div class="mb-4">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    for="username"
                                >
                                    Name (optional)
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    for="email"
                                >
                                    Email (optional)
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    rules="email"
                                    name="email"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    for="question"
                                >
                                    Question
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="question"
                                    name="question"
                                    type="text"
                                    placeholder="What's on your mind?"
                                    rules="required"
                                />
                            </div>
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </section>
                    <section className="bg-brand">
                        <div className="container mx-auto max-w-6xl py-20 px-4 md:px-20">
                            <p className="text-2xl text-center text-brand-300 mb-2">
                                Want to break out of tutorial hell?
                            </p>
                            <p class="text-4xl md:text-6xl font-bold text-center text-brand-100">
                                BUILD THE TUTORIAL YOURSELF!
                            </p>
                        </div>
                    </section>
                    <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                        <div className="md:grid grid-cols-2 gap-10 items-center">
                            <img
                                src="./cover.jpg"
                                alt="YouTube For Developers Cover Image"
                                className="rounded-lg shadow-lg mx-auto mb-10 md:mb-0"
                                id="coverImage"
                            />
                            <div className="">
                                <h1 className="text-4xl font-bold leading-snug text-gray-800">
                                    Take Your Career to the Next Level!
                                </h1>
                                <p>
                                    Ready to start creating YouTube videos while
                                    padding your resume, building your brand,
                                    and learning a lot along the way?
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
                    </section>
                    <section className="bg-gray-200">
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
                                            <strong>
                                                entire ~50 page eBook
                                            </strong>{' '}
                                            with lifetime updates. You will also
                                            get access to an{' '}
                                            <strong>
                                                exclusive Q&A stream
                                            </strong>{' '}
                                            where you can ask your own follow up
                                            questions!
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <h3 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
                                            How do I login and view the
                                            download?
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
                                            . Use the login button in the top
                                            right.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
                                            Other questions
                                        </h3>
                                        <p>
                                            Feel free to reach out in chat or
                                            send me an email at{' '}
                                            <strong>me@jamesqquick.com</strong>.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
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
                                    I'm a developer, speaker, and teacher with a
                                    passion for web development, design, and
                                    developer tools. I have taught tens of
                                    thousands of students online/in-person and
                                    am excited to share with you.
                                </p>
                                <p>
                                    In my spare time, I run a YouTube channel,
                                    play co-ed soccer with my wife, spend time
                                    with my dogs, and can solve a Rubik's cube
                                    in under two minutes.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
