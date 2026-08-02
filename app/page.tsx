"use client";

import Link from "next/link";
import Image from "next/image";
import { site, featuredProducts, allProducts, products, type Product } from "@/content/products";

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      {/* featured picks */}
      <FeaturedSection />
      {/* category strip */}
      <CategoryStrip />
      {/* all products */}
      <AllProducts />
      <AboutSection />
      <Footer />
    </>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/ullys/" className="font-bold tracking-[0.15em] text-sm">ULLYS FAVORITE</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <a href="#pilihan" className="hover:text-black transition">Kurasi</a>
          <a href="#semua" className="hover:text-black transition">Semua Produk</a>
          <a href="#tentang" className="hover:text-black transition">Tentang</a>
        </nav>
        <Link href={`/ullys/#semua`} className="btn-dark text-xs !py-2.5 !px-5">Lihat Koleksi</Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* hero background image */}
      <Image
        src="/ullys/images/hero.jpg"
        alt="ULLYS FAVORITE fashion"
        fill
        priority
        className="object-cover"
      />
      {/* dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      <div className="container-x relative py-16 md:pb-24">
        <div className="max-w-2xl text-white">
          <p className="caption text-white/60 mb-5 tracking-[0.3em]">FASHION CURATION — {new Date().getFullYear()}</p>
          <h1 className="font-hero text-6xl md:text-8xl font-medium leading-[1.05] italic">
            ULLYS
            <span className="block font-normal">FAVORITE</span>
          </h1>
          <p className="mt-5 max-w-lg text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Barang-barang yang beneran kupakai, bukan sekadar rekomendasi dari iklan. Aku pilih sendiri, aku kenakan sendiri, baru kupajang di sini.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#pilihan" className="btn-dark bg-white !text-black hover:!bg-white/90">Lihat Pilihanku</a>
            <a href={site.socialInstagram} className="border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition">Follow Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section id="pilihan" className="py-20 bg-black text-white">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="caption text-white/50 mb-3">Favoritku</p>
            <h2 className="section-title">Yang Sering Kupakai</h2>
          </div>
          <a href="#semua" className="text-sm text-white/70 hover:text-white transition underline underline-offset-4">Lihat semua</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((p, i) => (
            <FeatureCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ p, i }: { p: Product; i: number }) {
  return (
    <Link href={`/ullys/p/${p.slug}`} className="group fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
      <div className="aspect-[3/4] bg-white overflow-hidden rounded-lg">
        <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-widest text-white/50">{p.category}</p>
        <p className="font-medium mt-1">{p.name}</p>
        <p className="text-sm text-white/70 mt-0.5">{p.price}</p>
      </div>
    </Link>
  );
}

function CategoryStrip() {
  const cats = ["Atasan", "Bawahan", "Outerwear", "Dress", "Aksesori"];
  return (
    <section className="py-12 border-b border-black/10">
      <div className="container-x flex flex-wrap justify-center gap-3">
        {cats.map(c => (
          <a key={c} href="#semua" className="px-6 py-2.5 rounded-full border border-black/20 text-sm hover:bg-black hover:text-white transition">{c}</a>
        ))}
      </div>
    </section>
  );
}

function AllProducts() {
  return (
    <section id="semua" className="py-20">
      <div className="container-x">
        <div className="mb-10">
          <p className="caption mb-3">Semua Produk</p>
          <h2 className="section-title">Koleksi Lengkap</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {allProducts.map((p, i) => (
            <ProductCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <Link href={`/ullys/p/${p.slug}`} className="group fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
      <div className="aspect-[3/4] bg-black/5 overflow-hidden rounded-lg">
        <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="mt-3">
        <p className="text-[10px] uppercase tracking-widest text-black/40">{p.category}</p>
        <p className="font-medium text-sm mt-1">{p.name}</p>
        <p className="text-sm text-black/60 mt-0.5">{p.price}</p>
      </div>
    </Link>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-black text-white">
      <div className="container-x text-center max-w-xl mx-auto">
        <p className="caption text-white/50 mb-4">Tentang</p>
        <h2 className="section-title">Halo, Aku Ullis</h2>
        <p className="mt-6 text-white/70 leading-relaxed">{site.bio}</p>
        <p className="mt-4 text-sm text-white/50">Kalau kamu beli lewat link di sini, aku dapat komisi kecil. Nggak nambahin harga buat kamu yang beli di Shopee. Makasih, itu bantu banget buat aku lanjut bikin konten.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href={site.socialInstagram} className="btn-dark bg-white !text-black">Instagram</a>
          <a href={site.socialTiktok} className="btn-dark bg-white !text-black">TikTok</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/10">
      <div className="container-x text-center text-sm text-black/50">
        <p className="font-semibold tracking-[0.15em] text-black">ULLYS FAVORITE</p>
        <p className="mt-2">© {new Date().getFullYear()} · ULLYS FAVORITE</p>
        <p className="mt-1 text-xs text-black/40">Dibuat dengan usaha sendiri. Beberapa link afiliasi.</p>
      </div>
    </footer>
  );
}