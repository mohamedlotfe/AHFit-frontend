"use client";

import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contacts() {

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white p-14"
      style={{
        backgroundImage: `url('/bg2.jpg')`,
      }}
    >
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-6 text-center">تواصل معنا</h1>

      {/* Social Media Links */}
      <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-8 mb-8">
        {/* Instagram */}
        <Link href="https://www.instagram.com/hussien.fit" target="_blank">
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-3xl" />
            <span className="text-xl">@hussien.fit</span>
          </div>
        </Link>

        {/* Facebook */}
        <Link href="https://www.facebook.com/hussien.fit" target="_blank">
          <div className="flex items-center space-x-3">
            <FaFacebook className="text-3xl" />
            <span className="text-xl">/hussien.fit</span>
          </div>
        </Link>

        {/* Email */}
        <Link href="mailto:ahmedhussien@gmail.com">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-3xl" />
            <span className="text-xl">ahmedhussien@gmail.com</span>
          </div>
        </Link>
      </div>

      {/* Subscribe Button */}
      <Link href="https://tally.so/r/nWzOpR" target="_blank">
        <button className="bg-secondary text-white px-6 py-3 rounded-lg text-lg text-bold shadow-lg hover:bg-red-800">اشترك الان</button>
      </Link>
    </div>
  );
}
