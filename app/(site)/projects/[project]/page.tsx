import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getTransformation } from "../../../../sanity/sanity-utils";
import Link from "next/link";

type Props = {
  params: { project: string };
};

export default async function TransformationPage({ params }: Props) {
  const slug = params.project;
  const transformation = await getTransformation(slug); // Assuming a function to fetch the transformation details

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{transformation.name}</h1>
        <a
          href={transformation.url}
          title="View Transformation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Transformation
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={transformation.content} />
      </div>

      {transformation.url && (
        <div className="text-lg text-gray-700 mt-5">
          <Link href={transformation.url} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-[#FFC000] transition">
            check the video
          </Link>
        </div>
      )}

      <Image src={transformation.image} alt={transformation.name} width={200} height={200} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />

      {transformation.additionalImages && transformation.additionalImages.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Additional Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {transformation.additionalImages.map((image, index) => (
              <Image key={index} src={image} alt={`Additional image for ${transformation.name}`} width={600} height={400} className="rounded-lg border-2 border-gray-700 object-cover rounded-xl" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
