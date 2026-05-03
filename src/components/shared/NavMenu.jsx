"use client";
import {
  Bars,
  Heart,
  Gear,
  House,
  Person,
  CircleInfo,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import {
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { authClient } from "@/lib/auth-clinet";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const navItems = [
    { icon: House, path: "/", label: "Home" },
    { icon: Person, path: "/profile", label: "Profile" },
    { icon: Heart, path: "/wishlist", label: "WishList" },
    { icon: IoInformationCircleOutline, path: "/about-us", label: "About Us" },
    { icon: IoNewspaperOutline, path: "/blogs", label: "Blogs" },
    { icon: IoHelpCircleOutline, path: "/faq", label: "FAQS" },
    { icon: Gear, path: "/settings", label: "Settings" },
  ];

  return (
    <div>
      {" "}
      <div className="hidden lg:flex">
        <ul className="font-semibold text-md flex gap-4">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/animals"}>Animals</NavLink>
          </li>
          <li>
            <NavLink href={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink href={""}>Blogs</NavLink>
          </li>
          <li>
            <NavLink href={""}>FAQS</NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button
            variant="secondary"
            className="text-black text-sm"
            onPress={() => setIsOpen(true)}
          >
            <Bars />
            Menu
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="right">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading className="flex justify-between items-center">
                    <span>Menu Bar</span>
                  </Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <div className="flex justify-between items-center">
                    <p>Hello, welcome to Qurbaniya!</p>

                    {user ? (
                      <Button
                        className="bg-transparent hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-lg text-md"
                        onClick={async () => await authClient.signOut()}
                      >
                        LogOut
                      </Button>
                    ) : (
                      <Button className="font-semibold bg-orange-500 rounded-md">
                        <Link href={"/signin"}>Sign In / Register</Link>
                      </Button>
                    )}
                  </div>
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        type="button"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link className="flex gap-4" href={item.path}>
                          {" "}
                          <item.icon className="size-5 text-muted" />
                          {item.label}
                        </Link>
                      </button>
                    ))}
                  </nav>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </div>
  );
}
