# Product Requirements — ULLYS FAVORITE

**Working name:** ULLYS FAVORITE
**Product:** Personal branding / curated-product landing site
**Status:** Approved requirements
**Target:** Mobile-first landing + product pages
**Reference style:** dumaofficial.com (minimalist, clean, fashion editor)

---

## 1. Ringkasan Produk

Situs personal branding yang menampilkan produk fashion *curated* milik Ullis
('ULLYS FAVORITE'), dengan tujuan menjadi trend-setter. Pengunjung melihat kurasi
produk, lalu dikonversi ke link affiliate (Shopee).

Bukan toko online penuh — cukup **landing page** untuk brand + **halaman produk**
dengan detail & **link affiliate**.

## 2. Tujuan & Konversi

- Membangun personal brand & citra trend-setter.
- Menampilkan kurasi produk fashion yang sudah dipilih (curated).
- Konversi utama: klik **link affiliate Shopee** per produk.

## 3. Target Pengguna

- Pengikut media sosial Ullis (Instagram/TikTok).
- Pecinta fashion yang mencari rekomendasi kurasi.
- Mobile-first (dibuka dari link bio Instagram).

## 4. Ruang Lingkup MVP

**Termasuk:**
1. Landing page (brand intro, hero, grid produk unggulan).
2. Halaman produk detail (foto, deskripsi, harga, **link Shopee**).
3. 10 produk awal (dengan placeholder gambar fountain brand).
4. Mobile-first responsive.
5. Konten dikelola dari **1 file config** (mudah tambah/ubah produk).
6. Bahasa: Indonesia.
7. Analytics dasar (opsional).

**Tidak termasuk (post-MVP):**
- Cart/checkout, aktifkan shop online.
- Login/kurasi.
- Payment gateway.
- Multi-bahasa.
- CMS admin (cukup edit config).

## 5. Data Produk (per produk)

- `slug` — URL identitas produk.
- `name` — nama produk.
- `category` — kategori (mis. Atasan, Outerwear, Aksesori).
- `image` — URL/foto produk.
- `description` — deskripsi & kenapa di-curated (sudut pandang trend-setter).
- `price` — harga indikatif (opsional).
- `affiliateUrl` — **link Shopee**.
- `featured` — untuk landing grid.
- `displayOrder` — urutan.

## 6. Desain & Palet (ikon duma)

- Gaya: **terang, bersih, minimalis**.
- Palet mengikuti dumaofficial: **putih + hitam pekat** + aksen sederhana.
- Tipografi: bersih, editor/personal-brand feel.
- Mobile-first.

## 7. Teknologi & Deployment

- Next.js + TypeScript + Tailwind (sama dengan suzuki, sudah terbukti di server).
- Static export, di-host di server ini (bridge port 9876).
- Konten: `content/products.ts` (1 file config).

## 8. Keputusan Utama

| Keputusan | Nilai |
|-----------|-------|
| Brand | ULLYS FAVORITE |
| Kategori | Fashion |
| Jumlah produk | 10 |
| Gambar | Placeholder fashion-brand (produk nanti dari Shopee) |
| Bahasa | Indonesia |
| Host | Server ini (spt suzuki, port 9876) |
| Konten | 1 config file |
| Gaya desain | Terang, bersih, minimalis |
| Palet | Ikut warna duma (putih + hitam) |
