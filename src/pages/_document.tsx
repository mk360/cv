import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Radio+Canada&display=swap" rel="stylesheet" /> 
                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="CV - Mohamed Kassar"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
