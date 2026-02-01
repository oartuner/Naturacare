"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Sparkles, ArrowRight, ShoppingBag, Droplets, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-clinical-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="NaturaCare Kapak Görseli"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-clinical-white" />
        </div>

        {/* Content Card (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-2xl px-8 py-12 text-center backdrop-blur-md bg-white/40 border border-white/40 rounded-3xl shadow-2xl mx-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-primary-900/10 text-primary-900 text-xs font-extrabold tracking-widest uppercase"
          >
            <Sparkles size={14} /> Eczacılık Sanatı
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-primary-950 mb-6 leading-[1.1]">
            Doğanın Şifası, <br />
            <span className="italic text-primary-600">Bilimin Güvencesiyle</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-950 mb-10 font-normal max-w-lg mx-auto leading-relaxed">
            %100 saf içerikler ve uzman formüllerle hazırlanmış, bütüncül sağlığınızı destekleyen butik bakım ürünleri.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/boutique">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary-900 hover:bg-primary-800 text-white min-w-[200px] shadow-xl shadow-primary-900/20">
                Mağazayı Keşfet <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/academy">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary-900 text-primary-900 hover:bg-white/50 min-w-[200px] backdrop-blur-sm">
                Akademiye Katıl
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Features Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Leaf className="text-primary-500" size={32} />,
              title: "%100 Saf İçerik",
              desc: "Bitkilerin en saf haliyle, katkısız ve doğal yollarla elde edilen özler."
            },
            {
              icon: <ShieldCheck className="text-primary-500" size={32} />,
              title: "Bilimsel Temel",
              desc: "Modern laboratuvarlarda analiz edilmiş, güvenilirliği kanıtlanmış formüller."
            },
            {
              icon: <Droplets className="text-primary-500" size={32} />,
              title: "Bütüncül Yaklaşım",
              desc: "Sadece fiziksel değil, ruhsal ve zihinsel dengeyi hedefleyen aromaterapi."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 p-4 bg-primary-50 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-extrabold text-primary-950 mb-3">{feature.title}</h3>
              <p className="text-primary-900 leading-relaxed font-normal">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-500 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="text-accent-400 font-extrabold tracking-widest uppercase text-sm mb-4 block">Felsefemiz</span>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold mb-8 leading-tight">Doğanın kadim bilgeliğini modern yaşamla buluşturuyoruz.</h2>
              <p className="text-lg text-primary-50 mb-8 font-normal leading-relaxed">
                NaturaCare olarak, sağlığın bir bütün olduğuna inanıyoruz. Laboratuvar ortamında geliştirdiğimiz ürünlerimizle, doğanın iyileştirici gücünü en yüksek biyoyararlanımla size sunuyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center"><Heart size={14} className="text-primary-900" /></div>
                  <span className="font-normal">Sürdürülebilir üretim süreçleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center"><Heart size={14} className="text-primary-900" /></div>
                  <span className="font-normal">Hayvanlar üzerinde test edilmeyen ürünler</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800"
                alt="Felsefemiz"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Collections Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary-500 font-extrabold tracking-widest uppercase text-xs mb-4 block">Seçkilerimiz</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary-950">Popüler Koleksiyonlar</h2>
            </div>
            <Link href="/boutique">
              <Button variant="link" className="text-primary-900 font-extrabold text-lg p-0 h-auto group">
                Tümünü Gör <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Bergamot Yağı",
                category: "Uçucu Yağlar",
                price: "365.00 TL",
                img: "/images/products/bergamot.webp"
              },
              {
                name: "Argan Yağı",
                category: "Sabit Yağlar",
                price: "575.00 TL",
                img: "/images/products/argan.webp"
              },
              {
                name: "Palo Santo",
                category: "Ritüel",
                price: "435.00 TL",
                img: "/images/products/palo_santo.webp"
              },
              {
                name: "Multivitamin",
                category: "Takviye",
                price: "800.00 TL",
                img: "/images/products/quad4.webp"
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden bg-primary-50">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors" />
                  <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md text-primary-900 py-3 rounded-xl font-extrabold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Hızlı Bakış
                  </button>
                </div>
                <span className="text-xs text-primary-500 font-extrabold uppercase tracking-widest">{product.category}</span>
                <h3 className="text-lg font-extrabold text-primary-950 mt-1">{product.name}</h3>
                <p className="text-primary-800 font-extrabold mt-2">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-clinical-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif font-extrabold text-primary-950 mb-8">Sağlıklı Bir Dönüşüme Hazır mısınız?</h2>
          <p className="text-xl text-primary-950 mb-12 font-normal">
            Eşsiz aromaterapi yağlarımızdan homeopatik setlerimize kadar tüm ürünlerimi mağazamızda sizi bekliyor.
          </p>
          <Link href="/boutique">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-accent-500 hover:bg-accent-600 text-white shadow-2xl shadow-accent-500/20">
              Alışverişe Başla <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
