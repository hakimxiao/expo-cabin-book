// Konten onboarding dengan destinasi wisata Indonesia.
export type Slide = {
  id: string;
  title: string;
  body: string;
  image: string;
  location: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`;

export const slides: Slide[] = [
  {
    id: "story",
    title: "Temukan penginapan untuk setiap cerita perjalananmu",
    body: "Mulai dari vila di tengah pegunungan hingga penginapan tepi pantai, roam membantumu menemukan tempat menginap yang istimewa untuk setiap perjalanan.",
    image: unsplash("1516690561799-46d8f74f9abf"),
    location: "Ubud, Bali",
  },
  {
    id: "describe",
    title: "Cukup ceritakan penginapan impianmu",
    body: "Ceritakan tempat menginap yang kamu inginkan, seperti kabin nyaman dengan pemandangan pegunungan, dan roam akan mencarikan penginapan yang sesuai dengan keinginanmu.",
    image: unsplash("1537996194471-e657df975ab4"),
    location: "Nusa Penida, Bali",
  },
  {
    id: "answers",
    title: "Informasi langsung dari penginapan",
    body: "Tanyakan tentang waktu check-in, kebijakan hewan peliharaan, fasilitas, atau pembatalan. Dapatkan jawaban berdasarkan informasi dan kebijakan resmi penginapan.",
    image: unsplash("1500530855697-b586d89ba3ee"),
    location: "Bromo, Jawa Timur",
  },
];
