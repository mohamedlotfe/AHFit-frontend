"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface PlanImageCardProps {
  title: string;
  description?: any; // Sanity block content
  imageUrl: string;
}

const PlanImageCard: React.FC<PlanImageCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-md bg-white ">
      <h2 className="text-2xl font-bold mb-2 text-center text-primary">{title}</h2>

      <Image src={imageUrl} alt={title} className="rounded-md mb-4 w-full h-auto" width={700} height={475} />
      <PortableText value={description} />
    </div>
  );
};

export default PlanImageCard;
