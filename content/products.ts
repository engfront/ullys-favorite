// ============================================================
// ULLYS FAVORITE — CONTENT CONFIGURATION (SATU FILE)
// ------------------------------------------------------------
// CARA MENGEDIT:
// 1. Tambah/edit produk di daftar `products` di bawah.
// 2. Setiap produk butuh: slug, name, category, image, description,
//    price, affiliateUrl (link Shopee), featured, displayOrder.
// 3. Simpan, lalu build + deploy (lihat README / tanya Hermes).
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

export const site = {
  brandName: "ULLYS FAVORITE",
  tagline: "Barang yang kupakai, bukan cuma kupajang.",
  bio: "Halo, aku Ullis. Di sini aku share barang-barang yang beneran kupakai setiap hari. Kalau aku nggak suka, nggak akan kupajang di sini. Simpelnya gitu aja.",
  socialInstagram: "https://instagram.com/ullys.favorite",
  socialTiktok: "https://tiktok.com/@ullys.favorite",
};

// ── DAFTAR PRODUK (10) ──
export const products: Product[] = [
  {
    slug: "atasan-putih",
    name: "Atasan Putih Essentials",
    category: "Atasan",
    image: "/ullys/images/products/atasan-putih.svg",
    description: "Atasan putih yang selalu aku pakai kalau lagi nggak mau mikir outfit. Cocok dipaduin sama apa aja, bahan adem, dan nggak nerawang. Udah berkali-kali kubeli lagi.",
    price: "Rp 129.000",
    affiliateUrl: "#shopee-atasan-putih",
    featured: true,
    displayOrder: 1,
  },
  {
    slug: "blazer-cream",
    name: "Blazer Cream Cropped",
    category: "Outerwear",
    image: "/ullys/images/products/blazer-cream.svg",
    description: "Blazer pertama yang bikin aku kelihatan 'serius' tanpa harus mikir. Warna cream-nya lembut, nggak kaku. Aku suka pakai ke kerja, terus pas malem tinggal ganti inner aja udah beda vibe.",
    price: "Rp 299.000",
    affiliateUrl: "#shopee-blazer",
    featured: true,
    displayOrder: 2,
  },
  {
    slug: "dress-panjang",
    name: "Dress Panjang Minimalis",
    category: "Dress",
    image: "/ullys/images/products/dress-panjang.svg",
    description: "Dress yang pas kamu pengen keliatan rapi tapi tetap santai. Potongannya flowy, jadi nyaman dipakai seharian. Warna netral, gampang dipaduin buat acara apapun.",
    price: "Rp 249.000",
    affiliateUrl: "#shopee-dress",
    featured: true,
    displayOrder: 3,
  },
  {
    slug: "outerwear-hijau",
    name: "Outerwear Hijau Army",
    category: "Outerwear",
    image: "/ullys/images/products/outerwear-hijau.svg",
    description: "Hijau army yang aku pakai hampir tiap hari. Warnanya nggak gampang kotor keliatan, dan gampang dipaduin sama warna netral. Buat yang lagi males mikirin warna, ini jawabannya.",
    price: "Rp 219.000",
    affiliateUrl: "#shopee-outerwear",
    featured: true,
    displayOrder: 4,
  },
  {
    slug: "celana-wide",
    name: "Celana Wide Leg Putih",
    category: "Bawahan",
    image: "/ullys/images/products/celana-wide.svg",
    description: "Celana wide leg yang bikin badan keliatan lebih proporsional. Enak dipakai seharian, nggak sempit, dan gampang dipaduin. Aku punya warna lain karena suka banget sama modelnya.",
    price: "Rp 189.000",
    affiliateUrl: "#shopee-celana",
    featured: true,
    displayOrder: 5,
  },
  {
    slug: "kaos-polos",
    name: "Kaos Polos Premium",
    category: "Atasan",
    image: "/ullys/images/products/kaos-polos.svg",
    description: "Kaos polos dengan bahan yang pas — nggak ketipisan, nggak nerawang. Aku selalu sedia beberapa karena ini andalan buat outfit simpel.",
    price: "Rp 99.000",
    affiliateUrl: "#shopee-kaos",
    featured: false,
    displayOrder: 6,
  },
  {
    slug: "rok-plisket",
    name: "Rok Plisket Aesthetic",
    category: "Bawahan",
    image: "/ullys/images/products/rok-plisket.svg",
    description: "Rok plisket yang dulu kupikir cuma buat acara formal, ternyata enak juga buat daily. Lipatannya rapi, nyaman, dan gampang dipaduin sama atasan apa aja.",
    price: "Rp 169.000",
    affiliateUrl: "#shopee-rok",
    featured: false,
    displayOrder: 7,
  },
  {
    slug: "sweater-knit",
    name: "Sweater Knit Oversize",
    category: "Atasan",
    image: "/ullys/images/products/sweater-knit.svg",
    description: "Sweater rajut oversize yang hangat, pas buat ruangan AC atau pagi yang dingin. Ukurannya longgar jadi nyaman, tapi tetap keliatan rapi.",
    price: "Rp 239.000",
    affiliateUrl: "#shopee-sweater",
    featured: false,
    displayOrder: 8,
  },
  {
    slug: "jaket-denim",
    name: "Jaket Denim Timeless",
    category: "Outerwear",
    image: "/ullys/images/products/jaket-denim.svg",
    description: "Jaket denim yang udah aku pakai bertahun-tahun dan nggak bosen-bosen. Warnanya klasik, dipaduin outfit apapun tetep oke. Worth it banget.",
    price: "Rp 279.000",
    affiliateUrl: "#shopee-jaket",
    featured: false,
    displayOrder: 9,
  },
  {
    slug: "scarf-silk",
    name: "Scarf Silk Elegan",
    category: "Aksesori",
    image: "/ullys/images/products/scarf-silk.svg",
    description: "Scarf kecil yang sering aku pakai buat pemanis outfit. Lembut di kulit, bisa dipakai di leher atau diiket ke tas. Murah tapi kelihatan mahal.",
    price: "Rp 89.000",
    affiliateUrl: "#shopee-scarf",
    featured: false,
    displayOrder: 10,
  },
];

// helpers
export const featuredProducts = products.filter(p => p.featured).sort((a, b) => a.displayOrder - b.displayOrder);
export const allProducts = [...products].sort((a, b) => a.displayOrder - b.displayOrder);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
