import logo from "@/assets/logo.png";
import Image from "next/image";
import { NavMenu } from "./NavMenu";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-[#ffffff]  border-2">
      {" "}
      <div className="container mx-auto  flex justify-between items-center pl-5 pr-3 py-5">
        <div>
          <Image
            src={logo}
            width={150}
            height={40}
            alt="nav logo"
            className="w-25 md:w-30"
          />
        </div>
        {/* menu */}
        <div>
          <NavMenu />
        </div>
        {/* button */}
        <div className="hidden md:flex justify-center items-center">
          <Link href={"/signin"} className="text-md font-semibold mr-4 hover:text-orange-500">LogIn</Link>
          <Link href={"/register"}>
            <Button className="bg-[hsl(146,74%,31%)] hover:bg-[hsl(146,74%,21%)] rounded-md">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
