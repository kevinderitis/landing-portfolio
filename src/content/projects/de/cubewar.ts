import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  videoBorder: false,
  live: "https://cubewar.io",
  description:
    "CubeWar es un juego multijugador basado en navegador donde los jugadores controlan avatares cúbicos en batallas estratégicas de ritmo rápido.<br/><br/>El proyecto combina un motor de juego propio, un sistema de timeline en cliente y lógica de red en tiempo real con matchmaking basado en Redis para lograr una experiencia fluida.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Tutorial",
        caption: "Tutorial",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Temas de mapas",
        caption: "Temas de mapas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Autenticación",
        caption: "Autenticación",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Diseño responsive",
        caption: "Diseño responsive",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Múltiples modos de juego",
        caption: "Múltiples modos de juego",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Sistema de grupos",
        caption: "Sistema de grupos",
      },
    },
  ],
} as const satisfies ProjectContent;
