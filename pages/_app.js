import '../styles/index.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex items-center justify-center w-screen h-screen p-4">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
