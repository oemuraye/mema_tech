import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient.js';

import Head from 'next/head';
import favicon from '@/public/images/logo.png';

import { Poppins } from 'next/font/google';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;

import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata = {
  title: "MemaTech",
  description: "Empowering Women to Dream Big Through Technology. At MemaTech, we are committed to bridging the digital divide by equipping girls and women in Nigeria with the tools, skills, and confidence to thrive in technology. We inspire young minds to dream beyond limits and empower women to lead in a rapidly evolving digital world. Created by COSMOS Design",
  icons: {
    icon: {
      url: "@/public/images/logo.png"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
      {/* <Head>
          <link rel="icon" href={favicon} type="image/png" sizes="any" />
      </Head> */}
        {/* <link rel="icon" href={favicon} sizes="any" /> */}
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
