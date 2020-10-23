import { useEffect } from 'react';

export default function Questions() {
    useEffect(() => {
        const kwesScript = document.createElement('script');
        kwesScript.setAttribute('src', 'https://kwes.io/v2/kwes-script.js');
        kwesScript.setAttribute('defer', 'defer');
        document.head.appendChild(kwesScript);
    }, []);
    return (
        <>
            <h1 className="text-4xl font-bold leading-snug text-gray-800">
                Have a Burning Question?
            </h1>
            <p>
                Have a question that you think isn't covered in the book? Feel
                free to ask below!
            </p>
            <form
                className="kwes-form"
                action="https://kwes.io/api/foreign/forms/efFnn0v1ODclogPLTk0c"
                no-reload
                success-message="Thanks for submitting!"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Name (optional)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email (optional)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                        rules="email"
                        name="email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="question"
                    >
                        Question
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="question"
                        name="question"
                        type="text"
                        placeholder="What's on your mind?"
                        rules="required"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
