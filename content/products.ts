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
  tagline: "Kurasi mode sederhana yang beneran kepakai.",
  bio: "Halo, aku Ullis! Di sini aku cuma mau share barang-barang yang beneran aku pakai & aku suka — bukan cuma yang lagi nge-hits di TikTok. Semua yang aku pilih udah aku coba sendiri, dan kalau kamu butuh pendapat jujur soal cocok atau enggaknya, bilang aja ya.",
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
    description: "Atasan putih ini kayak penyelamat hidup — apapun outfit-nya, dia selalu cocok. Lagi malas mikir? Pakai ini aja, udah rapi otomatis. Bahannya adem & nggak nerawang, jadi aman buat dipakai seharian.",
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
    description: "Blazer cream ini bikin penampilan naik level tanpa ribet. Buat yang kesannya 'aku serius' pas rapat, tapi tetep soft buat hangout. Potongan cropped-nya modern, dipaduin inner putih atau polos aja udah oke.",
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
    description: "Dress panjang yang bikin kamu tetep keliatan effortless padahal mikirnya nol. Potongannya flowy & nyaman, jadi bebas gemulai seharian. Buat acara santai atau semi-formal, tinggal slip-on langsung cantik.",
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
    description: "Outerlayer hijau army yang edgy tapi tetap mudah dipakai. Cocok untuk layering saat cuaca tak menentu. Tambahkan dimensi pada outfit dasar yang polos.",
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
    description: "Celana wide leg yang nyaman dan bikin kakimu terlihat panjang. Potongan lebar memberi kesan kasual namun tetap berkelas. Wajib punya untuk koleksi fashion.",
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
    description: "Basic tee yang nggak akan pernah gagal. Bahan tebal tapi adem, tidak menerawang. Pilihan terbaik untuk koleksi daily essentials.",
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
    description: "Rok plisket dengan lipatan yang rapi dan elegan. Cocok untuk tampilan preppy maupun feminin. Gampang dipadukan dengan atasan cropped atau blouse.",
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
    description: "Sweater rajut oversize yang hangat dan nyaman. Cocok untuk musim hujan atau ruangan ber-AC. Tampilan cozy tanpa mengorbankan gaya.",
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
    description: "Jaket denim klasik yang nggak lekang oleh waktu. Fleksibel untuk semua outfit, dari casual hingga semi-formal. Investasi gaya jangka panjang.",
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
    description: "Scarf sutra lembut yang menambah sentuhan mewah ke outfit sederhana. Bisa dipakai di leher, tas, atau sebagai ikat rambut.",
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
