'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsGrid({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // filter logic
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="bg-[#FAFDFF] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-[#1A1A1A] mb-10">
          Our Products
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-[#909EAE] rounded-lg px-4 py-2"
          >
            <option value="all">All Categories</option>
            <option value="hoodies">Hoodies</option>
            <option value="shirts">Shirts</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-[#909EAE] rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {product.title}
                </h3>
                <p className="text-[#5A5A5A] mt-1">{product.price}</p>

                <div className="mt-4">
                  <Link
                    href={product.springLink}
                    target="_blank"
                    className="block text-center bg-[#909EAE] text-white px-4 py-2 rounded-lg hover:bg-[#5A5A5A] transition-colors"
                  >
                    View on Store
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
