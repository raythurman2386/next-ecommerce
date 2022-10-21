import { useNextSanityImage } from "next-sanity-image";
import { client } from "../utils/client";

export const useUrlFor = (image) => {
  return useNextSanityImage(client, image);
};
