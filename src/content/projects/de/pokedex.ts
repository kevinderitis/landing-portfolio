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
    "Ein grundlegendes Webprojekt, das zentrale Frontend-Konzepte anhand einer vertrauten Oberfläche trainiert.<br/><br/>Das Pokédex nutzt eine öffentliche API und konzentriert sich auf asynchronen Datenabruf, responsives Verhalten und eine saubere Komponentenstruktur.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Pokédex Anwendung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Standardansicht",
        caption: "Standardansicht",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Suchfunktion",
        caption: "Suchfunktion",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Responsives Design",
        caption: "Responsives Design",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Lazy-Loading",
        caption: "Lazy-Loading",
      },
    },
  ],
} as const satisfies ProjectContent;
