import Head from 'next/head';
import FAQs from '../components/FAQs';
import Hero from '../components/Hero';
import Instructor from '../components/Instructor';
import Questions from '../components/Questions';
import ResumeMissingSomething from '../components/ResumeMissingSomething';
import Testimonials from '../components/Testimonials';
import WhatYoullLearn from '../components/WhatYoullLearn';
import YouTubeForMe from '../components/YouTubeForMe';
export default function Home() {
    return (
        <div>
            <Head>
                <title>YouTube For Developers</title>
                <link rel="icon" href="/youtube.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:ital,wght@0,100;1,100&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="">
                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Hero title="Developer's Guide to Starting a YouTube Channel" />
                </section>
                <section className="text-center p-10">
                    <a
                        href="https://www.producthunt.com/posts/youtube-for-developers-ebook?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-youtube-for-developers-ebook"
                        target="_blank"
                    >
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=269994&theme=light"
                            alt="YouTube For Developers Ebook - Create content that will take your career to the next level! | Product Hunt"
                            style={{ width: '250px', height: '54px' }}
                            className="mx-auto"
                        />
                    </a>
                </section>
                <section className="bg-gray-200">
                    <ResumeMissingSomething />
                </section>

                <WhatYoullLearn />

                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20 ">
                    <YouTubeForMe />
                </section>
                <section className="bg-brand-800">
                    <div className="container mx-auto max-w-6xl py-20 px-4 md:px-20">
                        <p className="text-4xl text-center text-brand-200 mb-0">
                            Want to break out of tutorial hell...?
                        </p>
                        <p className="text-4xl md:text-6xl text-center text-brand-100">
                            BUILD THE TUTORIAL YOURSELF!
                        </p>
                    </div>
                </section>

                <Testimonials />

                <FAQs />

                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Hero />
                </section>

                <section className="bg-gray-200">
                    <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                        <Instructor />
                    </div>
                </section>
                {/* <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Questions />
                </section> */}
            </main>
        </div>
    );
}
