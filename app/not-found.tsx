/* eslint-disable react/no-unescaped-entities */
// app/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#90622F] text-[#FFFFFF]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/">
        <button className="bg-[#4F3B24] text-[#FFFFFF] py-2 px-6 rounded-lg hover:bg-[#3E2F1E] transition">Go Back Home</button>
      </Link>
    </div>
  );
}
