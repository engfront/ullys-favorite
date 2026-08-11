"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, products, featuredProducts } from "@/content/products";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "picks", label: "Picks" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [loaded, setLoaded] = useState(false);

  // loader
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  // scroll spy
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2;
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= pos) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[#0B0B0D] flex flex-col items-center justify-center">
        <p className="font-serif text-4xl tracking-[0.3em] text-[#C39B54]">ULLYS</p>
        <div className="mt-6 flex gap-1.5">
          {[0,1,2].map(i => <span key={i} className="loader-bar w-2 h-2 bg-[#C39B54]" style={{ animationDelay: `${i*0.15}s` }} />)}
        </div>
      </div>
    );
  }

  return (
    <>
      <SideNav active={active} />
      <Hero />
      <Marquee />
      <Picks />
      <About />
      <Contact />
    </>
  );
}

function SideNav({ active }: { active: string }) {
  return (
    <nav className="side-nav hidden md:flex flex-col">
      {SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`} className={s.id === active ? "active" : ""}>
          <span className="dot" />
          <span className="label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}

/* ── HERO: ringkas + photo v1 + slider kartu elegan ── */
function Hero() {
  const slides = featuredProducts;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [slides.length]);

  const cur = slides[idx];

  return (
    <section id="home" className="pt-16 md:pt-20 pb-12 bg-[#0B0B0D] relative overflow-hidden">
      {/* decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C39B54]/10 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* left: text + photo v1 */}
          <div className="text-center lg:text-left reveal">
            <p className="text-xs tracking-[0.4em] text-[#C39B54] uppercase mb-4">Curated Fashion</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] italic">
              The pieces that
              <span className="block text-[#C39B54] text-4xl md:text-6xl mt-1">made the cut</span>
            </h1>
            <p className="mt-5 text-white/60 max-w-md mx-auto lg:mx-0">
              Pickier than most, my closet's proof. Here's what made the cut and stayed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#picks" className="btn-gold">Explore Picks</a>
              <a href={site.socialInstagram} className="btn-line">@ullys.favorite →</a>
            </div>

            {/* hero img v1 */}
            <div className="mt-8 visible md:hidden rounded-xl overflow-hidden">
              <Image src="/ullys/images/hero.jpg" alt="ULLYS FAVORITE" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>

          {/* right: elegant card slider (v1 photo + product cards) */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            {/* v1 hero photo - main visual */}
            <div className="relative rounded-xl overflow-hidden group mb-4">
              <Image src="/ullys/images/hero.jpg" alt="ULLYS FAVORITE" width={700} height={460} className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="font-serif italic text-2xl text-white">Curated by Ully</p>
                <p className="text-xs tracking-[0.25em] text-[#C39B54] uppercase">Worn on repeat</p>
              </div>
            </div>

            {/* elegant product card slider */}
            <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="flex aspect-[16/10]">
                <div className="w-1/2 relative overflow-hidden">
                  <Image src={cur.image} alt={cur.name} width={400} height={260} className="w-full h-full object-cover animate-fadein" />
                </div>
                <div className="w-1/2 p-5 flex flex-col justify-center animate-fadein">
                  <p className="text-[10px] uppercase tracking-widest text-[#C39B54]">{cur.category}</p>
                  <p className="font-serif text-xl md:text-2xl text-cream mt-2">{cur.name}</p>
                  <p className="text-[#C39B54] mt-1">{cur.price}</p>
                  <Link href={`/p/${cur.slug}`} className="btn-line mt-4">View →</Link>
                </div>
              </div>
              {/* slider controls */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-[#C39B54]" : "w-1.5 bg-white/30"}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  {["‹","›"].map((c, ci) => (
                    <button key={c} onClick={() => setIdx((idx + (ci === 0 ? -1 : 1) + slides.length) % slides.length)}
                      className="w-8 h-8 border border-white/20 text-cream hover:border-[#C39B54] hover:text-[#C39B54] transition"> {c} </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="bg-[#C39B54] py-4 overflow-hidden">
      <div className="marquee">
        {[...products, ...products].map((p, i) => (
          <span key={i} className="text-black font-semibold tracking-[0.25em] text-xs uppercase">{p.name} · </span>
        ))}
      </div>
    </div>
  );
}

/* ── PICKS: ringkas + motion ── */
function Picks() {
  return (
    <section id="picks" className="py-20 bg-[#0B0B0D]">
      <div className="container-x">
        <div className="reveal mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">01 — Picks</p>
            <h2 className="title-lg">All Pieces</h2>
          </div>
          <p className="body-text max-w-xs hidden md:block">If it's here, it earned its spot in my closet.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/p/${p.slug}`} className="reveal group" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="aspect-[3/4] overflow-hidden bg-white/5 rounded-lg">
                <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="mt-3 p-1">
                <p className="text-[10px] uppercase tracking-widest text-[#C39B54]/70">{p.category}</p>
                <p className="font-medium text-sm mt-0.5 text-cream group-hover:text-[#C39B54] transition-colors">{p.name}</p>
                <p className="text-sm text-white/50">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT: ringkas ── */
function About() {
  return (
    <section id="about" className="py-20 bg-[#111114]">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div className="reveal text-center md:text-left">
          <p className="eyebrow">02 — About</p>
          <h2 className="title-xl">Hi, I'm Ully</h2>
          <p className="body-text mt-5">{site.bio}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={site.socialInstagram} className="btn-gold">Instagram</a>
            <a href={site.socialTiktok} className="btn-line">TikTok →</a>
          </div>
        </div>
        <div className="reveal relative flex justify-center" style={{ transitionDelay: "0.15s" }}>
          <svg className="rotating w-64 h-64 absolute" viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text className="fill-[#C39B54] text-[13px] tracking-[0.3em]">
              <textPath href="#ring">CURATED BY ULLY · WORN ON REPEAT ·</textPath>
            </text>
          </svg>
          <div className="w-36 h-36 rounded-full bg-[#C39B54] flex items-center justify-center">
            <span className="font-serif text-5xl text-black">U</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT: ringkas ── */
function Contact() {
  const wa = `https://wa.me/6281317710063?text=${encodeURIComponent("Hi Ully! I saw your ULLYS FAVORITE picks, I want to ask about one of them.")}`;
  return (
    <section id="contact" className="py-20 bg-[#0B0B0D]">
      <div className="container-x text-center">
        <div className="reveal">
          <p className="eyebrow">03 — Contact</p>
          <h2 className="title-xl">Found a piece you like?</h2>
          <p className="body-text mt-5 max-w-xl mx-auto">Every item links directly to where it's sold. For styling or sizing, message me on Instagram or WhatsApp.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href={wa} className="btn-gold">Start a Conversation</a>
            <a href={site.socialInstagram} className="btn-line">@ullys.favorite →</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="font-serif text-2xl tracking-[0.3em] text-[#C39B54]">ULLYS FAVORITE</p>
          <p className="mt-2 text-xs text-white/40">© {new Date().getFullYear()} · Independently curated. Each item links to its original seller.</p>
        </div>
      </div>
    </section>
  );
}