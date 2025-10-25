import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PrintingBrandSite() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'Brochures', img: '/images/brochure.jpg', desc: 'High-quality brochures for businesses and events.' },
    { name: 'Wedding Invitations', img: '/images/wedding.jpg', desc: 'Elegant invitations for your special day.' },
    { name: 'Business Cards', img: '/images/cards.jpg', desc: 'Professional business cards that make an impression.' },
    { name: 'Stickers', img: '/images/stickers.jpg', desc: 'Custom stickers to brand your products or events.' },
    { name: 'Badges', img: '/images/badges.jpg', desc: 'Personalized badges for companies, schools, and more.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-12 bg-white shadow-md">
        <motion.img src="/logo.png" alt="Brand Logo" className="mx-auto w-40 h-auto mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} />
        <motion.h1 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Creative Print Studio
        </motion.h1>
        <p className="text-gray-500 mt-2">Bringing your ideas to life through premium printing — brochures, invitations, business cards & more.</p>
      </header>

      {/* Product Showcase */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.name} onClick={() => setSelectedProduct(product)} className="cursor-pointer hover:shadow-lg transition">
              <CardContent className="p-4">
                <img src={product.img} alt={product.name} className="rounded-2xl w-full h-48 object-cover" />
                <h3 className="text-lg font-medium mt-3">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedProduct(null)}>
          <motion.div className="bg-white rounded-2xl shadow-lg max-w-md p-6" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="rounded-xl w-full h-56 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-4">{selectedProduct.desc}</p>
            <Button onClick={() => alert('Contact us for a quote!')}>Request a Quote</Button>
          </motion.div>
        </div>
      )}

      {/* Social Media Integration */}
      <footer className="bg-gray-900 text-gray-100 py-8 mt-16 text-center">
        <p className="mb-4 text-sm">Follow us and stay connected!</p>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><Facebook /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><Instagram /></a>
          <a href="mailto:info@creativeprint.com" className="hover:text-red-400"><Mail /></a>
          <a href="https://wa.me/1234567890" target="_blank" className="hover:text-green-500"><MessageCircle /></a>
          <a href="tel:+1234567890" className="hover:text-yellow-400"><Phone /></a>
        </div>
        <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Creative Print Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}