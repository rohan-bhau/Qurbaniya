"use client"
import logo from "@/assets/logo.png";
import Image from "next/image";
import { NavMenu } from "./NavMenu";
import { Avatar, Button, Skeleton } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-clinet";

const Navbar = () => {
  const { data: session , isPending} = authClient.useSession();
  const user = session?.user
  // console.log(user)
  return (
    <div className=" bg-[#ffffff] border-2">
      {" "}
      <div className="container mx-auto  flex justify-between items-center pl-5 pr-3 py-5">
        <Link href={"/"}>
          <Image
            src={logo}
            width={150}
            height={40}
            alt="nav logo"
            className="w-25 md:w-30"
          />
        </Link>
        {/* menu */}
        <div>
          <NavMenu />
        </div>
        {/* button */}
        <div className="hidden lg:flex items-center gap-3 min-w-[160px] justify-end">
          {isPending ? (
            <>
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-20 h-8 rounded-lg" />
            </>
          ) : user ? (
            <>
              <Link href={"/profile"}>
                <Avatar>
                  <Avatar.Image src={user?.image || ""} alt={user?.name} />
                  <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                    {user.name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
              </Link>

              <Button
                className="bg-transparent hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-lg text-md"
                onClick={async () => await authClient.signOut()}
              >
                LogOut
              </Button>
            </>
          ) : (
            <>
              <Link
                href={"/signin"}
                className="text-md font-semibold hover:text-orange-500"
              >
                LogIn
              </Link>

              <Link href={"/register"}>
                <Button className="bg-[hsl(146,74%,31%)] hover:bg-[hsl(146,74%,21%)] rounded-md">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
