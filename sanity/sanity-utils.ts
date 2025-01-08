"use server";
import { createClient, groq } from "next-sanity";
import { cookies } from "next/headers";

import { Page, coachingPlan, Project, Transformation } from "@/types";
import clientConfig from "./config/client-config";

export async function fetchCoachingPlan(): Promise<coachingPlan[]> {
  const userIsEditor: boolean =
    cookies()
      .getAll()
      .find((c) => c.name === "sanityRole")?.value === "Editor";

  const client = createClient({ ...clientConfig, useCdn: !userIsEditor });
  return client.fetch(
    groq`*[_type == "coachingPlan"]{
    _id,
    title,
    description,
    "image": image.asset->url
  }`
  );
}

// Fetch transformations from Sanity
export async function getTransformations(): Promise<Transformation[]> {
  const userIsEditor: boolean =
    cookies()
      .getAll()
      .find((c) => c.name === "sanityRole")?.value === "Editor";

  const client = createClient({ ...clientConfig, useCdn: !userIsEditor });
  return client.fetch(
    groq`*[_type == "transformation"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "additionalImages": additionalImages[].asset->url,
      url,
      content
    }`
  );
}
export async function getTransformation(slug: string): Promise<Transformation> {
  const userIsEditor: boolean =
    cookies()
      .getAll()
      .find((c) => c.name === "sanityRole")?.value === "Editor";

  const client = createClient({ ...clientConfig, useCdn: !userIsEditor });
  return client.fetch(
    groq`*[_type == "transformation" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "additionalImages": additionalImages[].asset->url,
      url,
      content
    }`,
    { slug }
  );
}
// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project"]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`
//   );
// }

// export async function getProject(slug: string): Promise<Project> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug }
//   );
// }

// export async function getPages(): Promise<Page[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       "image": image.asset->url,

//     }`
//   );
// }

// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content,
//       "image": image.asset->url,

//     }`,
//     { slug }
//   );
// }
