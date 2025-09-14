import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qcrllxvo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-01", // current date
});
