// app/error.tsx
"use client";

import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#90622F] text-[#FFFFFF]">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-6">{error.message || "An unexpected error occurred."}</p>
      <div className="flex gap-4">
        <button onClick={reset} className="bg-[#4F3B24] text-[#FFFFFF] py-2 px-6 rounded-lg hover:bg-[#3E2F1E] transition">
          Try Again
        </button>
        <Link href="/">
          <button className="bg-[#4F3B24] text-[#FFFFFF] py-2 px-6 rounded-lg hover:bg-[#3E2F1E] transition">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
