
import footer from "@/assets/footer.png";
import { playfair } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#033d1d] to-[#023419] py-8 px-5 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div>
            <Image src={footer} width={400} height={60} alt="footer image" />
            <p className="text-[#9c9292]">
              Your trusted platform for buying the best Qurbani animals across
              Bangladesh.
            </p>
          </div>
          {/* quick links */}
          <ul className="flex flex-col mt-5 mx-auto">
            <h2
              className={`${playfair.className} font-bold text-2xl text-[#d1c192] text-left`}
            >
              Quick Links
            </h2>
            <li className=" text-md  pl-3 text-[#d3c7c7] hover:text-orange-400 w-fit">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-md  pl-3 text-[#d3c7c7] hover:text-orange-400 w-fit">
              <Link href={"/animals"}>All Animals</Link>
            </li>
            <li className="text-md  pl-3 text-[#d3c7c7] hover:text-orange-400 w-fit">
              <Link href={"/profile"}>My Profile</Link>
            </li>
          </ul>

          {/* contact info */}
          <ul className="flex flex-col mt-5 mx-auto">
            <h2
              className={`${playfair.className} font-bold text-2xl text-[#d1c192]`}
            >
              Contact Info
            </h2>
            <li className="flex items-center gap-3 pl-3 cursor-pointer mt-1 text-md  text-[#d3c7c7] hover:text-orange-400">
              <FaPhoneAlt className="text-[#4f75d6]" />
              0123456789
            </li>
            <li className="flex items-center gap-3 cursor-pointer mt-1 pl-3 text-md  text-[#d3c7c7] hover:text-orange-400">
              <MdMail className="text-[#4f75d6]" />
              support@gmail.com
            </li>
            <li className=" flex items-center gap-3 cursor-pointer mt-1 pl-3 text-md  text-[#d3c7c7]  hover:text-orange-400 w-fit">
              <CiLocationOn /> Dhaka, Bangladesh
            </li>
          </ul>

          {/* social links */}
          <div className="flex flex-col mt-5 mx-auto ">
            <h2
              className={`${playfair.className} font-bold text-2xl text-[#d1c192]`}
            >
              Follow Us
            </h2>
            <ul className="flex gap-3 mt-5 mb-5">
              <li className="bg-[#ffffff] hover:bg-[#1877F2] hover:text-[#FFFFFF] w-7 h-7 p-2 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-300">
                <FaFacebookF />
              </li>
              <li className="hover:bg-[#ffffff] hover:bg-[#1877F2] text-[#ffffff] hover:text-[#d62976] w-7 h-7 text-xl hover:lg hover:p-1 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-300">
                {" "}
                <FaInstagram />
              </li>
              <li className="bg-white w-7 h-7 flex justify-center items-center rounded-full cursor-pointer hover:text-[#1DA1F2] transition-colors duration-300">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="py-5 bg-[#022e19] text-[#9c9292] text-center ">
          {" "}
          &copy;2026 Qurbaniya. All rights reserved. Trusted by families since
          2006
        </p>
      </div>
    </div>
  );
};

export default Footer;
