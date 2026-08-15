import Image from "next/image";
import Link from "next/link";
import { site, products, featuredProducts, basePath } from "@/content/products";
import InteractiveRoot, { ProductSlider } from "./interactive";

export default function Home() {
  return (
    <InteractiveRoot>
      {/* ---- HERO (ringkas, foto v1 + slider kartu) ---- */}
      <Hero />
      <Marquee />
      <Picks />
      <About />
      <Contact />
    </InteractiveRoot>
  );
}

/* ── HERO: server-rendered, fotonya pasti muncul ── */
function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-12 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E087A6]/12 rounded-full blur-3xl" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* left: brand text */}
          <div className="text-center lg:text-left">
            <p className="text-xs tracking-[0.4em] text-[#c2657f] uppercase mb-4">Curated Fashion</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] italic">
              The pieces that
              <span className="block text-[#c2657f] text-4xl md:text-6xl mt-1">made the cut</span>
            </h1>
            <p className="mt-5 text-[#7a4a5f] max-w-md mx-auto lg:mx-0">
              Pickier than most, my closet's proof. Here's what made the cut and stayed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#picks" className="btn-gold">Explore Picks</a>
              <a href={site.socialInstagram} className="btn-line">@ullys.favorite →</a>
            </div>

            {/* hero photo */}
            <div className="mt-10 rounded-xl overflow-hidden reveal-fade">
              <Image src={`${basePath}/images/hero.jpg`} alt="ULLYS FAVORITE" width={700} height={460} className="w-full h-[280px] md:h-[320px] object-cover" />
            </div>
          </div>

          {/* right: elegant product card slider */}
          <div>
            <ProductSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── MARQUEE ── */
function Marquee() {
  return (
    <div className="bg-[#E087A6] py-4 overflow-hidden">
      <div className="marquee">
        {[...products, ...products].map((p, i) => (
          <span key={i} className="text-black font-semibold tracking-[0.25em] text-xs uppercase">{p.name} · </span>
        ))}
      </div>
    </div>
  );
}

/* ── PICKS ── */
function Picks() {
  return (
    <section id="picks" className="py-20 relative">
      <div className="container-x">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">01 — Picks</p>
            <h2 className="title-lg">All Pieces</h2>
          </div>
          <p className="body-text max-w-xs hidden md:block">If it's here, it earned its spot in my closet.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/p/${p.slug}`} className="group" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="aspect-[3/4] overflow-hidden bg-white/5 rounded-lg">
                <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="mt-3 p-1">
                <p className="text-[10px] uppercase tracking-widest text-[#c2657f]/70">{p.category}</p>
                <p className="font-medium text-sm mt-0.5 text-cream group-hover:text-[#c2657f] transition-colors">{p.name}</p>
                <p className="text-sm text-[#8a6272]">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT ── */
function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="eyebrow">02 — About</p>
          <h2 className="title-xl">Hi, I'm Ully</h2>
          <p className="body-text mt-5">{site.bio}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={site.socialInstagram} className="btn-gold">Instagram</a>
            <a href={site.socialTiktok} className="btn-line">TikTok →</a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <svg className="rotating w-64 h-64 absolute" viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text style={{ fill: "#E087A6", fontSize: 13, letterSpacing: "0.3em" }}>
              <textPath href="#ring">CURATED BY ULLY · WORN ON REPEAT ·</textPath>
            </text>
          </svg>
          <div className="w-36 h-36 rounded-full bg-[#E087A6] flex items-center justify-center">
            <span className="font-serif text-5xl text-black">U</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact() {
  const wa = `https://wa.me/6281317710063?text=${encodeURIComponent("Hi Ully! I saw your ULLYS FAVORITE picks, I want to ask about one of them.")}`;
  return (
    <section id="contact" className="py-20 relative">
      <div className="container-x text-center">
        <p className="eyebrow">03 — Contact</p>
        <h2 className="title-xl">Found a piece you like?</h2>
        <p className="body-text mt-5 max-w-xl mx-auto">Every item links directly to where it's sold. For styling or sizing, message me on Instagram or WhatsApp.</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href={wa} className="btn-gold">Start a Conversation</a>
          <a href={site.socialInstagram} className="btn-line">@ullys.favorite →</a>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="font-serif text-2xl tracking-[0.3em] text-[#c2657f]">ULLYS FAVORITE</p>
          <p className="mt-2 text-xs time">© {new Date().getFullYear()} · Independently curated. Each item links to its original seller.</p>
        </div>
      </div>
    </section>
  );
}
