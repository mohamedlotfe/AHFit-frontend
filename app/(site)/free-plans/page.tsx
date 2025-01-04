"use client";

import Link from "next/link";

const FreePlansPage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">البرامج المجانية</h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-600"> دايت بلان (1)</h2>

      {/* Section 1: Diet Plans */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Weight Loss Plan */}
          <div className="flex-1 text-center">
            <h3 className="text-xl font-medium mb-2">دايت انقاص الوزن المجاني</h3>
            <p className="text-sm text-gray-600 mb-4">(اضعط للتحميل)</p>
            <a
              href="weight-loss-plan.pdf" // Replace with your actual file path
              download
              className="inline-block px-6 py-3 text-white font-semibold rounded-md"
              style={{ backgroundColor: "#fda72b" }}
            >
              Download
            </a>
          </div>

          {/* Weight Gain Plan */}
          <div className="flex-1 text-center">
            <h3 className="text-xl font-medium mb-2">دايت زيادة الوزن المجاني</h3>
            <p className="text-sm text-gray-600 mb-4">(اضعط للتحميل)</p>
            <a
              href="weight-gain-plan.pdf" // Replace with your actual file path
              download
              className="inline-block px-6 py-3 text-white font-semibold rounded-md"
              style={{ backgroundColor: "#fda72b" }}
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: Exercises */}
      <div className="max-w-3xl mx-auto mt-10 space-y-8 text-center text-gray-700">
        {/* Telegram Group */}
        <div>
          <h3 className="text-xl font-medium mb-2">التمارين(2)</h3>

          <h4 className="text-xl font-medium mb-2">جروب تليجرام</h4>
          <p className="text-sm text-gray-600 mb-4">(اضغط هنا)</p>
          <a
            href="https://t.me/Husseinfitt" // Replace with your actual Telegram group link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white font-semibold rounded-md"
            style={{ backgroundColor: "#fda72b" }}
          >
            Join Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreePlansPage;
