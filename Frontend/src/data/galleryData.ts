// ─── Gallery data ────────────────────────────────────────────────────────────
// Real photos served from Cloudinary (see Frontend/.env for account info).
// `span` controls the bento grid sizing: "large" = 2x2, "wide" = 2x1, omit for 1x1.
// Thumbnails are cropped via Cloudinary transformations so every tile lines up
// cleanly regardless of the source photo's original aspect ratio.

const CLOUD_BASE = "https://res.cloudinary.com/dcdo4venk/image/upload";

// Inserts a Cloudinary transformation string between "/upload/" and the asset path.
const cld = (path: string, transform: string) => `${CLOUD_BASE}/${transform}/${path}`;

const SQUARE = "w_800,h_800,c_fill,g_auto,q_auto,f_auto";
const WIDE = "w_1200,h_600,c_fill,g_auto,q_auto,f_auto";
const LARGE = "w_1200,h_1200,c_fill,g_auto,q_auto,f_auto";
const FULL = "w_1920,c_limit,q_auto,f_auto";

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

const photos = [
  { id: "img-24", path: "v1783150719/image24_pogdtt.jpg" },
  { id: "img-23", path: "v1783150710/image23_srritf.jpg" },
  { id: "img-20", path: "v1783150699/image20_jz52e7.png" },
  { id: "img-19", path: "v1783150690/image19_ym2zfj.png" },
  { id: "img-18", path: "v1783150684/image18_bdrv4t.jpg" },
  { id: "img-17", path: "v1783150677/image17_lccvnz.jpg" },
  { id: "img-16", path: "v1783150670/image16_diola2.jpg" },
  { id: "img-12", path: "v1783150655/image12_nsujr2.jpg" },
  { id: "img-11", path: "v1783150643/image11_ykvfix.jpg" },
  { id: "img-10", path: "v1783150630/image10_r34si1.jpg" },
  { id: "img-9", path: "v1783150619/image9_zy0xbj.jpg" },
  { id: "img-8", path: "v1783150612/image8_mfhrnb.jpg" },
  { id: "img-7", path: "v1783150605/image7_oakpm2.png" },
  { id: "img-6", path: "v1783150590/image6_rhwqh9.jpg" },
  { id: "img-4", path: "v1783150579/image4_qb4gor.jpg" },
  { id: "img-3", path: "v1783150572/image3_mchlej.jpg" },
] as const;

const categoryCycle: GalleryCategory[][] = [
  ["picnic-2024", "team-bonding"],
  ["picnic-2024", "outdoor-fun"],
  ["team-bonding"],
  ["picnic-2023", "team-bonding"],
  ["outdoor-fun", "picnic-2024"],
  ["picnic-2023"],
  ["picnic-2024"],
  ["outdoor-fun", "team-bonding"],
];

// A couple of standout tiles get bigger spans for visual rhythm.
const spans: Record<number, "large" | "wide"> = {
  2: "large",
  9: "wide",
};

export const galleryImages: GalleryItem[] = photos.map((photo, index) => {
  const span = spans[index];
  const transform = span === "large" ? LARGE : span === "wide" ? WIDE : SQUARE;

  return {
    id: photo.id,
    src: cld(photo.path, transform),
    alt: "KITTY Industries team picnic moment",
    link: cld(photo.path, FULL),
    categories: categoryCycle[index % categoryCycle.length],
    ...(span ? { span } : {}),
  };
});
