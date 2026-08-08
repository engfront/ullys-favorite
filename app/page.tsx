"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, products, featuredProducts } from "@/content/products";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "lookbook", label: "Lookbook" },
  { id: "picks", label: "Picks" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SLIDES = [
  { img: "/ullys/images/hero-slide-1.jpg", kicker: "The Edit", line: "Pieces I reach for on repeat" },
  { img: "/ullys/images/hero-slide-2.jpg", kicker: "Tailored", line: "Precision, without the stiffness" },
  { img: "/ullys/images/hero-slide-3.jpg", kicker: "Effortless", line: "Dressed down, still put together" },
  { img: "/ullys/images/hero-slide-4.jpg", kicker: "Foundational", line: "The base layer of a good wardrobe" },
  { img: "/ullys/images/hero-slide-5.jpg", kicker: "The Detail", line: "Small pieces, outsize presence" },
];

export default function Home() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [slideIdx, setSlideIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // loader
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
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
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // auto-advance slides
  useEffect(() => {
    const t = setInterval(() => setSlideIdx(i => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[#0B0B0D] flex flex-col items-center justify-center">
        <p className="font-serif text-3xl tracking-[0.3em] text-[#C39B54]">ULLYS</p>
        <p className="mt-1 text-xs tracking-[0.5em] text-[#F8F3E7]/50 mt-2">FAVORITE</p>
        <div className="mt-8 flex gap-1.5">
          {[0,1,2].map(i => <span key={i} className="loader-bar w-2 h-2 bg-[#C39B54]" style={{ animationDelay: `${i*0.15}s` }} />)}
        </div>
      </div>
    );
  }

  return (
    <>
      <SideNav active={active} />
      <Hero slideIdx={slideIdx} setSlideIdx={setSlideIdx} />
      <Marquee />
      <Lookbook />
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

function Hero({ slideIdx, setSlideIdx }: { slideIdx: number; setSlideIdx: (n: number) => void }) {
  const s = SLIDES[slideIdx];
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-[#0B0B0D]">
      {/* slides */}
      {SLIDES.map((sl, i) => (
        <div key={i} className={`slide absolute inset-0 ${i === slideIdx ? "active" : ""}`}>
          <Image src={sl.img} alt={sl.line} fill priority={i === 0} className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
        </div>
      ))}

      {/* centered title */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="slide-title">
          <p className="text-xs tracking-[0.35em] text-[#C39B54] uppercase">ULLYS FAVORITE</p>
          <h1 className="font-serif text-5xl md:text-8xl font-semibold leading-none mt-4 italic">
            {s.line}
          </h1>
          <p className="mt-6 text-sm tracking-[0.25em] uppercase text-white/70">{s.kicker}</p>
          <a href="#picks" className="btn-gold mt-10">Explore Picks</a>
        </div>
      </div>

      {/* bottom: brand + slide dots */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase hidden sm:block">Jakarta · Curated</p>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlideIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === slideIdx ? "w-8 bg-[#C39B54]" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase hidden sm:block">0{slideIdx + 1}</p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = Array.from({ length: 2 });
  return (
    <div className="bg-[#C39B54] py-5 overflow-hidden">
      {items.map((_, k) => (
        <div key={k} className={`marquee ${k > 0 ? "hidden" : ""}`}>
          {[...products, ...products].map((p, i) => (
            <span key={i} className="text-black font-semibold tracking-[0.25em] text-sm uppercase"
              aria-hidden={k > 0}>{p.name} · </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Lookbook() {
  return (
    <section id="lookbook" className="section bg-[#0B0B0D]">
      <div className="container-x w-full">
        <div className="reveal">
          <p className="eyebrow">01 — Lookbook</p>
          <h2 className="title-xl">The Full Edit</h2>
          <p className="body-text mt-6 max-w-xl">A rotating selection of the pieces in my rotation right now. Worn on repeat, vouched for by my own wardrobe.</p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((p, i) => (
            <Link key={p.slug} href={`/p/${p.slug}`} className="reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image src={p.image} alt={p.name} width={400} height={530} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-cream text-sm font-semibold">{p.name}</p>
                  <p className="text-[#C39B54] text-xs">{p.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 reveal">
          <a href="#" className="btn-line">View All Pieces →</a>
        </div>
      </div>
    </section>
  );
}

function Picks() {
  return (
    <section id="picks" className="section bg-[#111114]">
      <div className="container-x w-full">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">02 — Picks</p>
            <h2 className="title-lg">What I Keep Reaching For</h2>
          </div>
          <p className="body-text max-w-md">Straight from the closet. If it survived my culls, it earned its place here.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/p/${p.slug}`} className="reveal group" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="aspect-[3/4] overflow-hidden bg-white/5">
                <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="mt-3 text-sm font-semibold text-cream group-hover:text-[#C39B54] transition-colors">{p.name}</p>
              <p className="text-xs text-white/50">{p.category}</p>
              <p className="text-sm text-[#C39B54] mt-1">{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-[#0B0B0D]">
      <div className="container-x w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="eyebrow">03 — About</p>
          <h2 className="title-xl">Hi, I'm Ully</h2>
          <p className="body-text mt-6">{site.bio}</p>
          <p className="body-text mt-4">Virgo energy. Honest to a fault. Everything here passed the hardest audition there is: my own closet.</p>
          <div className="mt-10 flex gap-4">
            <a href={site.socialInstagram} className="btn-gold">Instagram</a>
            <a href={site.socialTiktok} className="btn-line">TikTok →</a>
          </div>
        </div>
        <div className="reveal relative flex justify-center" style={{ transitionDelay: "0.15s" }}>
          {/* rotating ring */}
          <svg className="rotating w-72 h-72 absolute" viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text className="fill-[#C39B54] text-[13px] tracking-[0.3em]">
              <textPath href="#ring">CURATED BY ULLY · WORN ON REPEAT ·</textPath>
            </text>
          </svg>
          <div className="w-40 h-40 rounded-full bg-[#C39B54] flex items-center justify-center">
            <span className="font-serif text-6xl text-black">U</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const wa = `https://wa.me/6281317710063?text=${encodeURIComponent("Hi Ully! I saw your ULLYS FAVORITE picks, I want to ask about one of them.")}`;
  return (
    <section id="contact" className="section bg-[#111114]">
      <div className="container-x w-full text-center">
        <div className="reveal">
          <p className="eyebrow">04 — Contact</p>
          <h2 className="title-xl">Found a piece you like?</h2>
          <p className="body-text mt-6 max-w-xl mx-auto">Every item links directly to where it's sold. For styling advice or sizing help, send me a note on Instagram or WhatsApp.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={wa} className="btn-gold">Start a Conversation</a>
            <a href={site.socialInstagram} className="btn-line">@ullys.favorite →</a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 reveal">
          <p className="font-serif text-2xl tracking-[0.3em] text-[#C39B54]">ULLYS FAVORITE</p>
          <p className="mt-3 text-xs text-white/40">© {new Date().getFullYear()} · Independently curated. Each item links to its original seller.</p>
        </div>
      </div>
    </section>
  );
}