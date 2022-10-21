import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
