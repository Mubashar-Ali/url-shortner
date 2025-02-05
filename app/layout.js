import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "URL Shortener - Simple, Fast, and Reliable Link Management",
  description: "Transform your long URLs into short, memorable links. Perfect for social media, marketing campaigns, or any time you need to share links efficiently.",
  keywords: "url shortener, link shortener, short links, url management, link management",
  openGraph: {
    title: "URL Shortener - Simple, Fast, and Reliable Link Management",
    description: "Transform your long URLs into short, memorable links. Perfect for social media, marketing campaigns, or any time you need to share links efficiently.",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "URL Shortener",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Shortener - Simple, Fast, and Reliable Link Management",
    description: "Transform your long URLs into short, memorable links. Perfect for social media, marketing campaigns, or any time you need to share links efficiently.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/" className="text-2xl font-bold text-indigo-600">
                      URL Shortener
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Mubashar Ali
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                <div className="flex space-x-6 md:order-2">
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    Mubashar Ali
                  </Link>
                </div>
                <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                  {new Date().getFullYear()} URL Shortener. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
