'use client';

import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/coach-square.jpg" // Replace with your image path in the /public folder
              alt="Hussein"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
    
          {/* Text Section */}
          <div className="text-center md:text-right">
            <h1 className="text-3xl font-bold text-red-700 mb-4">
              مــين هو حـسين؟
            </h1>
            <p className="text-lg leading-8 text-gray-700">
              أخصائي و مدرب معتمد في التغذية الرياضية و التدريب
              <br />
              <br />
              ساعد اكتر من ١٠٠٠ شخص لتغير مش بس صحته لكن نظام حياته بابسط الطرق العلمية و العملية.
            </p>
          </div>
        </div>
      );
};

export default AboutSection;
