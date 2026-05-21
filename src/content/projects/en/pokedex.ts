import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  videoBorder: true,
  description:
    "A foundational web project built to practice core frontend concepts through a familiar interface.<br/><br/>The Pokédex consumes a public API and focuses on asynchronous data fetching, responsive behavior, and clean component structure.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Pokédex App",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Default View",
        caption: "Default View",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Search Function",
        caption: "Search Function",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Responsive Design",
        caption: "Responsive Design",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Lazy Loading",
        caption: "Lazy Loading",
      },
    },
  ],
} as const satisfies ProjectContent;
