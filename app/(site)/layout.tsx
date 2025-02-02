import "../globals.css";
import Link from "next/link";

import Image from "next/image";

export const metadata = {
  title: "Ahmed Hussien | Personal Coach & Transformations",
  description: "Explore Ahmed Hussien's portfolio of personal coaching, free and paid plans, and transformational success stories.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-ligtGray text-whiteText max-w-5xl mx-auto py-10" suppressHydrationWarning={true}>
        {/* Header/Navbar */}
        <header className="flex items-center justify-between px-5 py-4 bg-primary text-whiteText shadow-md rounded-lg">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fit.png" // Replace with your logo path
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
              Ahmed Hussien
            </Link>
          </div>

          <nav className="flex items-center gap-5 text-sm text-whiteText font-bold ">
            {/* Static Navigation Links */}
            <Link href="/contacts" className="hover:underline hover:text-secondary text-lg">
              تواصل معنا
            </Link>
            <Link href="/about" className="hover:underline hover:text-secondary text-lg">
              عن المدرب
            </Link>
            <Link href="/paid-plans" className="hover:underline hover:text-secondary text-lg">
              البــاقـــات
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="mt-10">{children}</main>

        {/* Footer */}
        <footer className="mt-20 text-center text-lg text-gray-500">© {new Date().getFullYear()} Ahmed Hussien. All rights reserved.</footer>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error | string }) {
  // Render the custom error page in case of an error
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-[#FFFFFF]">
      <h2>Something went wrong!</h2>
      <p>{typeof error === "string" ? error : error.message}</p>
      <a href="/" className="inline-block px-6 py-3 text-white font-semibold rounded-md bg-secondary">
        Go to Home
      </a>
    </div>
  );
}
