export const social = [
  { url: "https://www.linkedin.com/in/kevinderitis/", name: "linkedin" },
  { url: "https://wa.me/", name: "whatsapp" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "whatsapp" }[];
