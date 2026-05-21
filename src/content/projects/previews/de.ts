import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "App de hábitos diarios",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Juego de estrategia multijugador",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Plataforma de juegos multijugador",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Juego de aventura 2D",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Proyecto open source de aprendizaje",
  },
] as const satisfies ProjectPreview[];
