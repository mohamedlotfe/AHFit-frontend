import { PortableTextBlock } from "sanity";

export type Transformation = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  additionalImages?: string[];
  url: string;
  content: PortableTextBlock[];
  createdAt: Date;
};
