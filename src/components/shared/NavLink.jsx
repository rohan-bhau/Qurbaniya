"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      className={`${isActive ? "text-orange-500 border-b-3  border-orange-500" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
