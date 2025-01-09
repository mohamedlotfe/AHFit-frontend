import { getTransformations } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import TransformationSection from "./components/TransformationSection";

export default async function Home() {
  const transformations = await getTransformations();

  return (
    <div className="bg-white text-gray-800">
      {/* Background Image Section */}
      <div className="relative h-[300px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: "url('/background-2.jpg')" }}></div>
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-30 h-[300px]"></div> */}
      </div>

      {/* Hero Section */}
      <div className="relative text-center mt-1 pt-[10px]">
        <Image src="/coach-square.jpg" alt="Coach" width={200} height={200} className="mx-auto rounded-full border-4 border-white shadow-lg" />
        <div className="mt-5 flex justify-center gap-4">
          <Link href="/free-plans" className="bg-secondary text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 text-lg font-bold">
            البرامج المجانية
          </Link>
          <Link href="/paid-plans" className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 text-lg font-bold">
            التدريب الاونلاين
          </Link>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold text-primary">Coach Ahmed Hussien</h2>
          <p className="text-lg text-gray-600 font-semibold">Empowering Transformations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-20">
        <TransformationSection transformations={transformations} />
      </div>
    </div>
  );
}
