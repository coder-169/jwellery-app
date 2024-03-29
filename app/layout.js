import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta
          name="description"
          content="Diamond Labs combines crafting, engineering and data technologies to create, design and trade your perfect pieces of jewellery and then, immortalizing them.  
            Legacy, made perfect."
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Diamond Labs"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Diamond Labs"
        />
        <meta
          property="og:description"
          content="Diamond Labs combines crafting, engineering and data technologies to create, design and trade your perfect pieces of jewellery and then, immortalizing them.  
          Legacy, made perfect."
        />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="2048" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@diamondlabs" />
        <meta
          name="twitter:title"
          content="Diamond Labs"
        />
        <meta
          name="twitter:description"
          content="Diamond Labs combines crafting, engineering and data technologies to create, design and trade your perfect pieces of jewellery and then, immortalizing them.  
            Legacy, made perfect."
        />
        <meta name="twitter:creator" content="@diamondlabs" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />


      </head>
      <body className={inter.className}>

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </body>
    </html>
  );
}
