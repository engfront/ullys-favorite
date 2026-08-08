import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, allProducts, products } from "@/content/products";

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="container-x py-32 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="title-xl">Piece not found</h1>
        <Link href="/" className="btn-gold mt-8">Back home</Link>
      </div>
    );
  }

  const related = allProducts.filter(p => p.slug !== product.slug).slice(0, 4);
  const wa = `https://wa.me/6281317710063?text=${encodeURIComponent(`Hi Ully! I'm interested in ${product.name} from your ULLYS FAVORITE picks.`)}`;

  return (
    <>
      <Nav />
      <main className="container-x py-10 md:py-16 bg-[#0B0B0D] min-h-screen">
        {/* breadcrumb */}
        <nav className="text-xs text-white/40 mb-8 space-x-2">
          <Link href="/" className="hover:text-[#C39B54]">Home</Link>
          <span>/</span>
          <span className="text-white/60">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* image */}
          <div className="aspect-[3/4] bg-white/5 overflow-hidden">
            <Image src={product.image} alt={product.name} width={600} height={800} className="w-full h-full object-cover" />
          </div>

          {/* info */}
          <div className="flex flex-col">
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="title-lg">{product.name}</h1>
            <p className="text-2xl text-[#C39B54] font-semibold mt-4">{product.price}</p>

            <div className="my-8 border-t border-white/10 pt-8">
              <h3 className="font-semibold mb-3 text-cream">Why I picked this</h3>
              <p className="text-white/70 leading-relaxed">{product.description}</p>
            </div>

            {/* CTA */}
            <div className="mt-auto space-y-3">
              <a href={product.affiliateUrl} target="_blank" rel="noreferrer noopener" className="btn-gold w-full justify-center text-base">
                Buy This Piece
              </a>
              <a href={wa} className="btn-line justify-center w-full">Ask About Sizing →</a>
            </div>
          </div>
        </div>
      </main>

      {/* related */}
      <section className="py-16 bg-[#111114]">
        <div className="container-x">
          <h2 className="title-xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-white/5 overflow-hidden">
                  <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-sm font-medium mt-2 text-cream group-hover:text-[#C39B54] transition-colors">{p.name}</p>
                <p className="text-[#C39B54] text-sm">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0D]/90 backdrop-blur border-b border-white/10">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-lg tracking-[0.2em] text-[#C39B54]">ULLYS FAVORITE</Link>
        <Link href="/#picks" className="btn-gold text-xs !py-2 !px-4">All Picks</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0B0B0D]">
      <div className="container-x text-center text-sm text-white/40">
        <p className="font-serif tracking-[0.25em] text-[#C39B54]">ULLYS FAVORITE</p>
        <p className="mt-2">© {new Date().getFullYear()} · Independently curated.</p>
      </div>
    </footer>
  );
}