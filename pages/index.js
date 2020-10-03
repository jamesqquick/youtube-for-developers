import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>YouTube For Developers</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://kwes.io/v2/kwes-script.js"
                    charset="utf-8"
                ></script>
            </Head>

            <main className="max-w-2xl text-center">
                <h1 className="text-5xl uppercase text-center text-gray-900">
                    YouTube For Developers
                </h1>
                <p className="text-2xl text-center mb-8 text-gray-700">
                    Learn how to start a YouTube channel today and why it will
                    take your career to the next level. Launching on October
                    7th!
                </p>
                <a
                    href="https://learn.jamesqquick.com/developers-guide-to-starting-a-youtube-channel"
                    taget="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand px-6 py-4 uppercase text-red-100 rounded-md"
                >
                    Pre-order here
                </a>
                {/* <form
                    className="kwes-form"
                    action="https://kwes.io/api/foreign/forms/bnbThzvAUYpTc8EJRqyO"
                >
                    <label htmlFor="name">Your Name (optional)</label>
                    <input type="text" name="name" rules="max:255" />
                    <label htmlFor="email">Your Email (optional)</label>
                    <input type="text" name="email" />
                    <label htmlFor="question">Your Question</label>
                    <textarea type="text" name="question" />
                    <button type="submit">Submit</button>
                </form> */}
            </main>
        </div>
    );
}
