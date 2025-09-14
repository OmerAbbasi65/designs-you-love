import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#FAFDFF] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            About <span className="text-[#909EAE]">DesignsYouLove</span>
          </h1>
          <p className="text-lg text-[#5A5A5A] mb-4">
            <strong>DesignsYouLove</strong> is your go-to destination for 
            <strong> custom printed apparel and accessories</strong>. 
            We bring unique ideas to life through premium-quality products — 
            from hoodies and tees to lifestyle essentials.
          </p>
          <p className="text-lg text-[#5A5A5A] mb-4">
            Founded with a passion for creativity and self-expression, 
            our mission is to help you showcase your style while 
            supporting sustainable, high-quality production. 
          </p>
          {/* <ul className="list-disc list-inside space-y-2 text-[#5A5A5A]">
            <li>
              <strong>Creative Vision:</strong> Bold designs to inspire and connect.
            </li>
            <li>
              <strong>Top Quality:</strong> We select fabrics and materials that last.
            </li>
            <li>
              <strong>Sustainable Practices:</strong> Eco-conscious manufacturing.
            </li>
            <li>
              <strong>Customer First:</strong> Your satisfaction is our priority.
            </li>
          </ul> */}
          <p className="mt-6 text-lg text-[#5A5A5A]">
            With <strong>DesignsYouLove</strong>, you’re not just shopping — 
            you’re joining a community of creators, trendsetters, and 
            everyday people who value individuality and quality.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-65 sm:h-72 md:h-[400px]">
          <Image
            src="/images/about.png" // 👉 Place your image in public/images
            alt="About DesignsYouLove - Custom Printed Apparel and Accessories"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
