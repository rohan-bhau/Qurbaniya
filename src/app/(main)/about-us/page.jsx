import Image from "next/image";
import farm from "@/assets/farm.jpg";
import { poppins } from "@/fonts/font";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`${poppins.className} text-3xl md:text-4xl font-bold text-gray-800`}
          >
            About Qurbaniya
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            A modern platform designed to simplify the Qurbani process with
            transparency, trust, and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed">
              Qurbaniya is a digital livestock marketplace where users can
              explore and book healthy animals such as cows, goats, and sheep
              for Qurbani. We focus on providing verified listings, clear
              information, and a smooth user experience.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our goal is to bring the traditional Qurbani marketplace online,
              making it easier for people to find the right animal without
              stress or confusion.
            </p>


            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">
                  ✔ Verified Animals
                </h4>
                <p className="text-sm text-gray-500">
                  Healthy and trusted sources
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">✔ Easy Booking</h4>
                <p className="text-sm text-gray-500">Simple and fast process</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">
                  ✔ Transparent Pricing
                </h4>
                <p className="text-sm text-gray-500">No hidden costs</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">✔ User Friendly</h4>
                <p className="text-sm text-gray-500">
                  Clean and simple interface
                </p>
              </div>
            </div>
          </div>


          <div className="relative">
            <Image
              src={farm}
              width={450}
              height={400}
              alt="Livestock"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />


            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md">
              <p className="text-sm font-semibold text-gray-700">
                Trusted Livestock Marketplace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
