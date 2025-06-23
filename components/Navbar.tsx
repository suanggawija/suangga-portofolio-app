"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="fixed top-0 z-50 w-full flex justify-center pt-2 ">
      <nav className="w-full max-w-[1440px] flex justify-between items-center bg-white/30 dark:bg-gray-700/30 backdrop-blur-lg text-gray-800 md:mx-[80px] px-[40px] py-3 rounded-full ">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-gray-800 dark:text-gray-300"
        >
          Suangga
        </Link>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
            onClick={() => {
              handleMobileMenuToggle();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex gap-5 text-gray-600 dark:text-gray-400 text-sm">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${
                  pathname == item.href ? "text-cyan-600" : ""
                } hover:text-cyan-700`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul>
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/30 dark:bg-gray-700/30 backdrop-blur-lg text-gray-500 md:mx-[80px] px-[40px] py-3 rounded-xl mt-3  md:hidden">
            <ul className="flex flex-col items-center py-2">
              {Menu.map((item, index) => (
                <li key={index} className="py-2">
                  <Link
                    href={item.href}
                    className={`${
                      pathname == item.href ? "text-cyan-600" : ""
                    } hover:text-cyan-700`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
