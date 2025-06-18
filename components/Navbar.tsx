"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const Menu = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Tentang Saya",
      href: "/about",
    },
    {
      title: "Portofolio",
      href: "/portofolio",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Kontak",
      href: "/contact",
    },
  ];
  return (
    <div className="fixed top-0 z-50 w-full flex justify-center pt-2 ">
      <nav className="w-full max-w-[1440px] flex justify-between items-center bg-white/30 dark:bg-gray-700/30 backdrop-blur-lg text-gray-800 md:mx-[80px] px-[40px] py-3 rounded-full ">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-gray-800 dark:text-gray-300"
        >
          Suangga
        </Link>
        <ul className="flex gap-5 text-gray-600 dark:text-gray-400 text-sm">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-cyan-700">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
