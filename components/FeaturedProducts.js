"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  // Fetch products from our API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="bg-[#FAFDFF] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#909EAE] rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative w-full h-65">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {product.name}
                </h3>
                <p className="text-[#5A5A5A] mt-1">{product.price}</p>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="flex-1 text-center bg-[#909EAE] text-white px-4 py-2 rounded-lg hover:bg-[#5A5A5A] transition-colors"
                  >
                    View
                  </Link>
                  {/* <button className="flex-1 border border-[#909EAE] text-[#909EAE] px-4 py-2 rounded-lg hover:bg-[#909EAE] hover:text-white transition-colors">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
   