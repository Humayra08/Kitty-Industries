// ─── Gallery data ────────────────────────────────────────────────────────────
// Replace `src` with real photos — drop files into `public/gallery/` and point
// `src` at them (e.g. "/gallery/tug-of-war.jpg"). `link` controls where the
// image opens when clicked (a full-res photo, an album, a social post, etc.).
// `span` controls the bento grid sizing: "large" = 2x2, "wide" = 2x1, omit for 1x1.

export type GalleryCategory =
  | "picnic-2024"
  | "picnic-2023"
  | "outdoor-fun"
  | "team-bonding";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  link: string;
  categories: GalleryCategory[];
  span?: "large" | "wide";
}

export const galleryImages: GalleryItem[] = [
  {
    id: "tug-of-war",
    src: "https://picsum.photos/seed/kitty-tug-of-war/500/500",
    alt: "Team tug-of-war at the company picnic",
    link: "https://picsum.photos/seed/kitty-tug-of-war/1600/1600",
    categories: ["outdoor-fun", "team-bonding", "picnic-2024"],
  },
  {
    id: "buffet-line",
    src: "https://picsum.photos/seed/kitty-buffet-line/500/500",
    alt: "Team members serving food at the buffet line",
    link: "https://picsum.photos/seed/kitty-buffet-line/1600/1600",
    categories: ["picnic-2024", "team-bonding"],
  },
  {
    id: "group-photo",
    src: "https://picsum.photos/seed/kitty-group-photo/1000/1000",
    alt: "KITTY Industries annual picnic 2024 group photo",
    link: "https://picsum.photos/seed/kitty-group-photo/2400/2400",
    categories: ["picnic-2024", "team-bonding"],
    span: "large",
  },
  {
    id: "soccer",
    src: "https://picsum.photos/seed/kitty-soccer/500/500",
    alt: "Colleagues playing a friendly soccer match",
    link: "https://picsum.photos/seed/kitty-soccer/1600/1600",
    categories: ["outdoor-fun", "picnic-2024"],
  },
  {
    id: "balloons",
    src: "https://picsum.photos/seed/kitty-balloons/500/500",
    alt: "Team celebrating with balloons",
    link: "https://picsum.photos/seed/kitty-balloons/1600/1600",
    categories: ["team-bonding", "picnic-2024"],
  },
  {
    id: "jenga",
    src: "https://picsum.photos/seed/kitty-jenga/500/500",
    alt: "Colleagues playing a giant Jenga game",
    link: "https://picsum.photos/seed/kitty-jenga/1600/1600",
    categories: ["team-bonding", "picnic-2024"],
  },
  {
    id: "sitting-circle",
    src: "https://picsum.photos/seed/kitty-sitting-circle/500/500",
    alt: "Team sitting together in a circle on the grass",
    link: "https://picsum.photos/seed/kitty-sitting-circle/1600/1600",
    categories: ["team-bonding", "picnic-2023"],
  },
  {
    id: "cricket",
    src: "https://picsum.photos/seed/kitty-cricket/500/500",
    alt: "Colleagues playing cricket outdoors",
    link: "https://picsum.photos/seed/kitty-cricket/1600/1600",
    categories: ["outdoor-fun", "picnic-2024"],
  },
  {
    id: "food-serving",
    src: "https://picsum.photos/seed/kitty-food-serving/500/500",
    alt: "Team enjoying a picnic meal together",
    link: "https://picsum.photos/seed/kitty-food-serving/1600/1600",
    categories: ["picnic-2024"],
  },
  {
    id: "gazebo-group",
    src: "https://picsum.photos/seed/kitty-gazebo-group/1000/500",
    alt: "Team group photo under a gazebo",
    link: "https://picsum.photos/seed/kitty-gazebo-group/2400/1200",
    categories: ["team-bonding", "picnic-2023"],
    span: "wide",
  },
];
