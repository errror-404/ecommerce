import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dqcd23uo",
  dataset: "production",
  apiVersion: "2022-03-10",
  tokken: process.env.NEXT_PUBLIC_SANITY_TOKKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
