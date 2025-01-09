"use client";

import Slider from "react-slick";
import Link from "next/link";
import TransformationCard from "./TransformationCard";
import { Transformation } from "../../../types";

function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any }) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "black", "padding-top": "1px" }} onClick={onClick} />;
}

function SampleNextArrow(props: { className?: any; style?: any; onClick?: any }) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "black", "padding-top": "1px" }} onClick={onClick} />;
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface TransformationSectionProps {
  transformations: Transformation[];
}
const TransformationSection = ({ transformations }: TransformationSectionProps) => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
        <span className="relative inline-block">
          <span className="text-4xl">👑</span>
          TOP TRANSFORMATIONS
        </span>
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {transformations.map((transformation, index) => (
            <TransformationCard key={index} transformation={transformation} />
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="https://tally.so/r/nWzOpR" target="_blank">
          <button className="bg-secondary text-white px-6 py-2 rounded-lg text-lg shadow-lg hover:bg-red-800 text-bold ">اشترك الان</button>
        </Link>
      </div>
    </div>
  );
};

export default TransformationSection;
