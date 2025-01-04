import { getTransformations } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import TransformationSection from "./components/TransformationSection";
const test = [
  { name: "Roni Omar", images: ["/1.jpg", "/2.jpg"], link: "/projects/roni-omar" },
  { name: "Mohamed Ayman", images: ["/3.jpg"], link: "/projects/mohamed-ayman" },
  { name: "Hossam Mansour", images: ["/7.jpg"], link: "/projects/hossam-mansour" },
];
export default async function Home() {
  const transformations = await getTransformations();
  // console.log(transformations);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center mt-10 pt-10">
        <Image src="/coach-square.jpg" alt="Coach" width={200} height={200} className="mx-auto rounded-full" />
        <div className="mt-5 flex justify-center gap-4">
          <Link href="/free-plans" className="bg-[#FFC000] text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500  text-lg" style={{ backgroundColor: "#fda72b" }}>
            البرامج المجانية
          </Link>
          <Link href="/paid-plans" className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700  text-lg">
            البرامج المدفوعة
          </Link>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold text-gray-800">Coach Ahmed Hussien</h2>
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
