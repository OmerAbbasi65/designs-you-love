import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FAFDFF] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Discover Your Style, <br /> Shop with{" "}
            <span className="text-[#909EAE]">Confidence</span>
          </h1>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            DesignsYouLove brings you the latest trends, top-quality products, and
            unbeatable deals. Your one-stop shop for everything you love.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-[#909EAE] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#5A5A5A] transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-[#909EAE] text-[#909EAE] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#909EAE] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-60 sm:h-72 md:h-[388px]">
          <Image
            src="/images/hero7.png" //  Replace with your image path
            alt="Shopping Experience"
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
}
