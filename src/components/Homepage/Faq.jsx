"use client";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { poppins } from "@/fonts/font";

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How can I book an animal?",
      a: "Browse all animals, click on your preferred one, and fill out the booking form after logging in.",
    },
    {
      q: "Do I need an account to book?",
      a: "Yes, you must be logged in to place a booking. You can register easily using email or Google login.",
    },
    {
      q: "Are the animals verified and healthy?",
      a: "All animals are listed from trusted sources and are described with proper details to help you make a safe choice.",
    },
    {
      q: "Can I view full details before booking?",
      a: "Yes, each animal has a detailed page including price, weight, age, breed, and location.",
    },
    {
      q: "Is online payment required?",
      a: "No, this platform only handles bookings. Payment and final transactions are done offline.",
    },
    {
      q: "Can I change or cancel my booking?",
      a: "Since booking data is not permanently stored, you can simply choose another animal and book again.",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto px-5 md:px-7 space-y-4">
        <h2
          className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
        >
         FAQ
        </h2>

        {faqs.map((faq, i) => {
          const isOpen = active === i;

          const style = useSpring({
            height: isOpen ? 60 : 0,
            opacity: isOpen ? 1 : 0,
            config: { tension: 200, friction: 20 },
          });

          return (
            <div key={i} className="bg-white rounded-xl border">
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex justify-between p-4 font-medium"
              >
                {faq.q}
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              <animated.div style={style} className="overflow-hidden px-4">
                <p className="text-sm text-gray-600">{faq.a}</p>
              </animated.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
