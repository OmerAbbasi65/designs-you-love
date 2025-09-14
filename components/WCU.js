import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="bg-[#FAFDFF] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                        Why Choose <span className="text-[#909EAE]">DesignsYouLove</span>
                    </h2>
                    <p className="text-lg text-[#5A5A5A] mb-4">
                        At <strong>DesignsYouLove</strong>, we specialize in creating
                        <strong> custom printed apparel and accessories</strong> that let you
                        express your personality. Whether you’re looking for
                        <strong> one-of-a-kind hoodies, t-shirts, or unique lifestyle gear</strong>,
                        our online store delivers quality and creativity in every product.
                    </p>
                    <p className="text-lg text-[#5A5A5A] mb-4">
                        We use premium materials, eco-friendly inks, and top-notch printing
                        technology to ensure vibrant colors and long-lasting wear. When you
                        shop at DesignsYouLove, you’re not just buying clothes — you’re
                        investing in originality.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-[#5A5A5A]">
                        <li>
                            <strong>Exclusive Designs:</strong> Define your space with exceptionally rare artwork.
                        </li>
                        <li>
                            <strong>Premium Quality:</strong> High-grade fabrics and durable
                            prints.
                        </li>
                        <li>
                            <strong>Fast Shipping:</strong> Reliable delivery right to your
                            doorstep.
                        </li>
                        <li>
                            <strong>Eco-Friendly:</strong> Sustainable practices for a better
                            planet.
                        </li>
                        <li>
                            <strong>Customer Satisfaction:</strong> We prioritize your
                            happiness with hassle-free returns.
                        </li>
                    </ul>

                    <p className="mt-6 text-lg text-[#5A5A5A]">
                        Experience the perfect
                        blend of style, comfort, and individuality.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-80 md:h-[450px]">
                    <Image
                        src="/images/wcu.png" // 👉 Place your image in public/images
                        alt="Why Choose DesignsYouLove - Custom Printed Apparel and Accessories"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
