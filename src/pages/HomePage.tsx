import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { ProductsSection } from "./Product";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { generateFakeReviews, reviewData } from "~/data/review";

export default function HomePage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [showCount] = useState(10);
  const [sortOrder] = useState("latest"); // latest / oldest

  useEffect(() => {
    const allReviews = [...reviewData, ...generateFakeReviews(10)];
    setReviews(allReviews);
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === "latest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="bg-[#F2F0F1] p">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-8">
          <div className="flex flex-col gap-6 max-w-lg :text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button className="px-8 py-3 text-lg bg-black text-white w-full md:w-40 hover:bg-gray-800 transition-all duration-300">
                Shop Now
              </Button>
            </div>

            <div className="flex flex-col-1 sm:flex-row justify-center md:justify-start items-center gap-8 mt-6">
              <Stat number="200+" label="International Brands" />
              <Divider />
              <Stat number="2,000+" label="High-Quality Products" />
              <Divider />
              <Stat number="30,000+" label="Happy Customers" />
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-1/2 md:mb-[-85px]">
            <img
              src="/images/hero.png"
              alt="Fashion Model"
              className="w-full max-w-[500px] md:max-w-[600px] "
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-8 ">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-10 px-6">
          {["brand1", "brand2", "brand3", "brand4", "brand5"].map(
            (name, idx) => (
              <img
                key={idx}
                src={`/images/${name}.png`}
                alt={`Brand ${idx + 1}`}
                className="w-20 md:w-28 lg:w-36 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            )
          )}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <ProductsSection />
      </section>

      <section className="w-full " id="brands">
        <div className="max-w-7x1 mx-auto bg-[#F0F0F0] rounded-[40px] px-6 md:px-16 py-16">
          <h2 className="font-['Integral_CF-Bold',Helvetica] font-bold text-black text-3xl md:text-5xl text-center mb-16">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/casual"
                className="flex flex-col items-center gap-4 w-full md:w-auto"
              >
                <div className="overflow-hidden rounded-[20px] w-full md:w-[407px] h-[220px] md:h-[289px]">
                  <img
                    src="/images/casual.png"
                    alt="Casual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <Link
                to="/formal"
                className="flex flex-col items-center gap-4 w-full md:w-auto"
              >
                <div className="overflow-hidden rounded-[20px] w-full md:w-[684px] h-[220px] md:h-[289px]">
                  <img
                    src="/images/formal.png"
                    alt="Formal"
                    className="w-full h-full "
                  />
                </div>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/party"
                className="flex flex-col items-center gap-4 w-full md:w-auto"
              >
                <div className="overflow-hidden rounded-[20px] w-full md:w-[684px] h-[220px] md:h-[289px]">
                  <img
                    src="/images/party.png"
                    alt="Party"
                    className="w-full h-full "
                  />
                </div>
              </Link>

              <Link
                to="/gym"
                className="flex flex-col items-center gap-4 w-full md:w-auto"
              >
                <div className="overflow-hidden rounded-[20px] w-full md:w-[407px] h-[220px] md:h-[289px]">
                  <img
                    src="/images/gym.png"
                    alt="Gym"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-30">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h2 className="font-['Integral_CF-Bold',Helvetica] font-bold text-black text-5xl text-center mb-16">
            OUR CUSTOMERS HAPPY
          </h2>

          <div>
            <button onClick={scrollLeft} className="text-black ">
              <ArrowLeft />
            </button>

            <button onClick={scrollRight} className="text-black ">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="relative max-w-8xl mx-auto px-6">
          <div
            ref={scrollRef}
            className="
          flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-4
        "
          >
            {sortedReviews.slice(0, showCount).map((rev) => (
              <div
                key={rev.id}
                className="
              bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow shrink-0
              w-[260px] snap-start
            "
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(rev.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    {rev.rating}/5
                  </span>
                </div>

                <h4 className="font-semibold">{rev.username}</h4>
                <p className="text-gray-700">{rev.comment}</p>
                <span className="text-gray-500 text-sm">{rev.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

/* --- Small Components --- */
type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div className="text-start">
      <div className="text-3xl md:text-4xl font-bold text-gray-900">
        {number}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block w-px h-12 bg-gray-300" />;
}
