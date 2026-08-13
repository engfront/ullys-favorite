"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/content/products";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "picks", label: "Picks" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* Client wrapper: loader overlay + side nav only.
   Content (Hero, Picks, About, Contact) is server-rendered inside children,
   so the page is never blank even before JS runs. */
export default function InteractiveRoot({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState<string>("home");

  // brief loader overlay
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700);
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

  // fade-in cards on scroll (progressive; content already visible w/o it)
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal-fade").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* loader overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-[60] bg-[#fff5f8] flex flex-col items-center justify-center">
          <p className="font-serif text-4xl tracking-[0.3em] text-[#c2657f]">ULLYS</p>
          <div className="mt-6 flex gap-1.5">
            {[0,1,2].map(i => <span key={i} className="loader-bar w-2 h-2 bg-[#E087A6]" style={{ animationDelay: `${i*0.15}s` }} />)}
          </div>
        </div>
      )}

      {/* side nav */}
      <nav className="side-nav hidden md:flex flex-col z-50">
        {SECTIONS.map(s => (
          <a key={s.id} href={`#${s.id}`} className={s.id === active ? "active" : ""}>
            <span className="dot" />
            <span className="label">{s.label}</span>
          </a>
        ))}
      </nav>

      {children}
    </>
  );
}

/* Product card slider (interactive) */
export function ProductSlider() {
  const slides = featuredProducts;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [slides.length]);

  const cur = slides[idx];

  return (
    <div className="relative bg-white/70 border border-[#e8cfda] rounded-xl overflow-hidden">
      <div className="flex aspect-[16/10]">
        <div className="w-1/2 relative overflow-hidden">
          <Image src={cur.image} alt={cur.name} width={400} height={260} className="w-full h-full object-cover animate-fadein" />
        </div>
        <div className="w-1/2 p-5 flex flex-col justify-center animate-fadein">
          <p className="text-[10px] uppercase tracking-widest text-[#c2657f]">{cur.category}</p>
          <p className="font-serif text-xl md:text-2xl text-cream mt-2">{cur.name}</p>
          <p className="text-[#c2657f] mt-1">{cur.price}</p>
          <Link href={`/p/${cur.slug}`} className="btn-line mt-4">View →</Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-3 border-t border-[#e8cfda]">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-[#E087A6]" : "w-1.5 bg-white/30"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          {([["‹", -1], ["›", 1]] as [string, number][]).map(([c, d]) => (
            <button key={c} onClick={() => setIdx((idx + d + slides.length) % slides.length)} aria-label={c}
              className="w-8 h-8 border border-[#c9a3b2] text-cream hover:border-[#E087A6] hover:text-[#c2657f] transition"> {c} </button>
          ))}
        </div>
      </div>
    </div>
  );
}