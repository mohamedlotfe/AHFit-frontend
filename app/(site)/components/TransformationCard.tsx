import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Transformation } from "../../../types";

const TransformationCard = ({ transformation }: { transformation: Transformation }) => {
  if (!transformation) return null;

  return (
    <Link href={`/projects/${transformation.slug}`} className={styles.card}>
      {/* Set fixed height and width */}
      <div className="w-[19rem] h-96 relative rounded-md overflow-hidden m-auto">
        <Image src={transformation.image} alt={`${transformation.name} transformation`} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-whiteText">{transformation.name}</h3>
      </div>
    </Link>
  );
};

export default TransformationCard;
