
import banner from "@/assets/banner.png";
import bannerImage from "@/assets/bannerImage.png";
import { poppins } from "@/fonts/font";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat pt-20`}
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="container mx-auto  flex flex-col md:flex-row justify-between">
        {/* left */}
        <div>
          {" "}
          <h2 className={`${poppins.className} font-bold mb-6`}>
            <span className="text-2xl md:text-3xl lg:text-5xl px-5 md:px-7 font-semibold">
              Find Your Perfect
            </span>
            <br />
            <span className="text-4xl md:text-4xl lg:text-7xl px-5 md:px-7 text-[#0c6e33]">
              Qurbani Animal
            </span>
            <br />
            <span className="text-3xl  lg:text-6xl  px-5 md:px-7">Easily</span>
          </h2>
          <p className="px-5 md:px-7 text-[#585353] mb-5">
            Browse verified cows, goats & sheep from trusted farms across
            Bangladesh
          </p>
          <Link href={"/animals"}>
            <Button className="bg-[hsl(146,74%,31%)] hover:bg-[hsl(146,74%,21%)] rounded-md mx-5 md:mx-7">
              Browse Animals
              <FaArrowRight />
            </Button>
          </Link>
        </div>
        {/* right */}
        <div className="md:w-[400px] md:h-[250px] lg:w-[850px] lg:h-[450px]  px-5 md:px-0">
          <Image
            src={bannerImage}
            width={700}
            height={500}
            alt="banner image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
