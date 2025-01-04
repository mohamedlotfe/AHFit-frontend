import { PortableTextBlock } from "sanity";

export type coachingPlan = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: PortableTextBlock;
  image: string;
};
