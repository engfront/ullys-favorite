// ============================================================
// ULLYS FAVORITE — CONTENT CONFIGURATION (SATU FILE)
// ------------------------------------------------------------
// CARA MENGEDIT:
// 1. Tambah/edit produk di daftar `products` di bawah.
// 2. Setiap produk butuh: slug, name, category, image, description,
//    price, affiliateUrl (link pembelian), featured, displayOrder.
// 3. Simpan, lalu build + deploy (lihat README / tanya Hermes).
//
// Catatan: produk saat ini dikurasi dari DUMA (dumaofficial.com),
// brand fashion yang dipakai istri pemilik situs.
// ============================================================

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
  affiliateUrl: string;
  featured: boolean;
  displayOrder: number;
};

// Prefix for static assets (matches next.config basePath)
// basePath: env kosong ("") => root (Vercel); unset => "/ullys" (bridge lokal)
const _bp = process.env.NEXT_PUBLIC_ULLYS_BASE_PATH;
export const basePath = _bp !== undefined ? (_bp || "") : "/ullys";

export const site = {
  brandName: "ULLYS FAVORITE",
  tagline: "The pieces that made the cut.",
  bio: "Hi, I'm Ully. Virgo energy, honest to a fault. I only recommend pieces I'd actually rebuy for myself. If it's here, it earned its spot in my closet. The hardest audition there is.",
  socialInstagram: "https://instagram.com/ullys.favorite",
  socialTiktok: "https://tiktok.com/@ullys.favorite",
};

// ── DAFTAR PRODUK (Duma curated) ──
export const products: Product[] = [
  {
    slug: "leroy-coatigan",
    name: "Leroy Coatigan",
    category: "Outerwear",
    image: `${basePath}/images/products/leroy.jpg`,
    description: "Coatigan yang kuandalkan hampir tiap minggu. Tebal pas, hangat tapi nggak gerah, dan warnanya netral jadi gampang dipaduin dengan apa aja. Nilai terbaik buat outer yang sering kepakai.",
    price: "Rp 995.000",
    affiliateUrl: "https://dumaofficial.com/products/leroy-coatigan-black",
    featured: true,
    displayOrder: 1,
  },
  {
    slug: "breya-jacket",
    name: "Breya Jacket",
    category: "Outerwear",
    image: `${basePath}/images/products/breya.jpg`,
    description: "Jacket yang bikin outfit simpel langsung keliatan rapi. Potongannya tegas, bahan nyaman, dan cocok buat kerja maupun hangout. Salah satu yang paling sering kupakai.",
    price: "Rp 725.000",
    affiliateUrl: "https://dumaofficial.com/products/breya-jacket-black",
    featured: true,
    displayOrder: 2,
  },
  {
    slug: "carly-denim-pants",
    name: "Carly Denim Pants",
    category: "Pants",
    image: `${basePath}/images/products/carly.jpg`,
    description: "Celana denim yang bikin badan keliatan lebih proporsional. Nggak sempit, enak dipakai seharian, dan warna medium blue-nya gampang dipaduin. Aku punya lebih dari satu karena suka banget.",
    price: "Rp 715.000",
    affiliateUrl: "https://dumaofficial.com/products/carly-denim-pants-medium-blue",
    featured: true,
    displayOrder: 3,
  },
  {
    slug: "renne-sweater",
    name: "Renne Sweater",
    category: "Outerwear",
    image: `${basePath}/images/products/renne.jpg`,
    description: "Sweater yang hangat pas buat ruangan ber-AC atau pagi yang dingin. Bahan nyaman, pas di badan, dan warnanya lembut. Sering banget kupakai buat daily.",
    price: "Rp 595.000",
    affiliateUrl: "https://dumaofficial.com/products/renne-sweater-white",
    featured: true,
    displayOrder: 4,
  },
  {
    slug: "kelly-shirt",
    name: "Kelly Shirt",
    category: "Top",
    image: `${basePath}/images/products/kelly.jpg`,
    description: "Kemeja yang rapi tanpa kelihatan kaku. Bahannya adem, cocok buat kerja atau acara semi-formal. Udah beberapa warna yang kupunya karena polanya pas.",
    price: "Rp 685.000",
    affiliateUrl: "https://dumaofficial.com/products/kelly-shirt-white",
    featured: true,
    displayOrder: 5,
  },
  {
    slug: "kalto-tshirt",
    name: "Kalto T-shirt",
    category: "Top",
    image: `${basePath}/images/products/kalto.jpg`,
    description: "Kaos polos dengan bahan yang pas. Nggak ketipisan, nggak nerawang. Warna grey-nya netral, jadi andalan buat outfit simpel. Selalu sedia beberapa.",
    price: "Rp 525.000",
    affiliateUrl: "https://dumaofficial.com/products/kalto-t-shirt-grey",
    featured: false,
    displayOrder: 6,
  },
  {
    slug: "eve-tshirt",
    name: "Eve T-shirt",
    category: "Top",
    image: `${basePath}/images/products/eve.jpg`,
    description: "Kaos casual yang nyaman dipakai seharian. Potongan simpel, warnanya baby blue yang segar. Gampang dipaduin sama celana apa aja.",
    price: "Rp 495.000",
    affiliateUrl: "https://dumaofficial.com/products/eve-t-shirt-dark-grey-new-version",
    featured: false,
    displayOrder: 7,
  },
  {
    slug: "carl-jacket",
    name: "Carl Jacket",
    category: "Outerwear",
    image: `${basePath}/images/products/carl.jpg`,
    description: "Jacket yang kelihatan mahal tapi pas di budget. Bahan tebal, warnanya earthy, dan cocok buat layering. Bikin outfit dasar langsung naik level.",
    price: "Rp 875.000",
    affiliateUrl: "https://dumaofficial.com/products/carl-jacket-khaki",
    featured: false,
    displayOrder: 8,
  },
  {
    slug: "leone-top",
    name: "Leone Top",
    category: "Top",
    image: `${basePath}/images/products/leone.jpg`,
    description: "Atasan yang warnanya coklat lembut dan enak dipaduin. Nyaman dipakai, pas buat acara santai maupun semi-formal. Sering jadi pilihan saat nggak mau ribet.",
    price: "Rp 565.000",
    affiliateUrl: "https://dumaofficial.com/products/leone-top-brown",
    featured: false,
    displayOrder: 9,
  },
  {
    slug: "hugo-jacket",
    name: "Hugo Jacket",
    category: "Outerwear",
    image: `${basePath}/images/products/hugo.jpg`,
    description: "Jacket yang hangat dan kelihatan rapi. Materialnya bagus, cocok buat dipakai ke luar kota atau aktivitas outdoor ringan. Investasi outer yang worth it.",
    price: "Rp 825.000",
    affiliateUrl: "https://dumaofficial.com/products/hugo-jacket-light",
    featured: false,
    displayOrder: 10,
  },
];

// helpers
export const featuredProducts = products.filter(p => p.featured).sort((a, b) => a.displayOrder - b.displayOrder);
export const allProducts = [...products].sort((a, b) => a.displayOrder - b.displayOrder);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
