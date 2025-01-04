import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  createdAt: Date;
};
