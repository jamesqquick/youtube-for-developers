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
                <section className="bg-gray-200">
                    <ResumeMissingSomething />
                </section>
                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20 ">
                    <YouTubeForMe />
                </section>
                <section className="bg-gray-200">
                    <WhatYoullLearn />
                </section>
                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Questions />
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
                    <Testimonials />
                </section>
                <section className="bg-gray-200">
                    <FAQs />
                </section>
                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Hero />
                </section>

                <section className="bg-gray-200">
                    <div className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                        <Instructor />
                    </div>
                </section>
            </main>
        </div>
    );
}
