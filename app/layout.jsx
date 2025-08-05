import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kuldeep Khelwar - WordPress Developer & Programmer",
  description:
    "Portfolio of Kuldeep Khelwar, an aspiring WordPress developer with 1.6 years of professional experience. Skilled in front-end development, C/C++ programming, and computer operations.",
  keywords: "WordPress Developer, Programmer, Web Developer, C/C++, JavaScript, Node.js, MongoDB, Front-end Developer",
  author: "Kuldeep Khelwar",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Kuldeep Khelwar - WordPress Developer & Programmer",
    description:
      "Portfolio of Kuldeep Khelwar, an aspiring WordPress developer with professional experience in web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Khelwar - WordPress Developer & Programmer",
    description:
      "Portfolio of Kuldeep Khelwar, an aspiring WordPress developer with professional experience in web development.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
