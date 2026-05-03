"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      className={`${isActive ? "text-[#158a47] border-b-3  border-[#158a47]" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
