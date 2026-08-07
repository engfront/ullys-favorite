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
        <p className="caption mb-4">404</p>
        <h1 className="section-title">Piece not found</h1>
        <Link href="/" className="btn-dark mt-8">Back home</Link>
      </div>
    );
  }

  const related = allProducts.filter(p => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <Nav />
      <main className="container-x py-10 md:py-16">
        {/* breadcrumb */}
        <nav className="text-xs text-black/50 mb-8 space-x-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black/70">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* image */}
          <div className="aspect-[3/4] bg-black/5 rounded-2xl overflow-hidden">
            <Image src={product.image} alt={product.name} width={600} height={800} className="w-full h-full object-cover" />
          </div>

          {/* info */}
          <div className="flex flex-col">
            <p className="caption mb-3">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-4">{product.price}</p>

            <div className="my-8 border-t border-black/10 pt-8">
              <h3 className="font-semibold mb-3">Why I picked this</h3>
              <p className="text-black/70 leading-relaxed">{product.description}</p>
            </div>

            {/* buy CTA */}
            <div className="mt-auto space-y-3">
              <a href={product.affiliateUrl} target="_blank" rel="noreferrer noopener" className="btn-dark w-full text-base">
                Cek di Shopee
              </a>
              <p className="text-center text-[11px] text-black/40">
                Made the cut ✂️
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* related */}
      <section className="py-16 bg-black text-white border-t border-black/10">
        <div className="container-x">
          <h2 className="section-title mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-white overflow-hidden rounded-lg">
                  <Image src={p.image} alt={p.name} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-sm font-medium mt-2">{p.name}</p>
                <p className="text-white/60 text-sm">{p.price}</p>
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="font-bold tracking-[0.15em] text-sm">ULLYS FAVORITE</Link>
        <Link href={`/#semua`} className="btn-dark text-xs !py-2 !px-4">All Picks</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 bg-white">
      <div className="container-x text-center text-sm text-black/50">
        <p className="font-semibold tracking-[0.15em] text-black">ULLYS FAVORITE</p>
        <p className="mt-2">© {new Date().getFullYear()} · Kurasi fashion pilihan</p>
      </div>
    </footer>
  );
}