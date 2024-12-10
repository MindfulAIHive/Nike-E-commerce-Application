'use client'
import Image from "next/image";
import React, { useState } from "react";
import topLogo from "@public/images/logo/favicon.svg";
import logo from "@public/images/logo/logo.svg";
import wishlistIcon from "@public/images/icons/wishlist.svg";
import cartIcon from "@public/images/icons/cart.svg";
import searchIcon from "@public/images/icons/search.svg";
import menuIcon from "@public/images/icons/menu.svg";
import crossIcon from "@public/images/icons/cross.svg";
import Link from "next/link";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Desktop Header */}
      <div className="hidden font-Roboto  lg:block ">
        <div className="flex justify-between items-center px-10 bg-[#f5f5f5]">
          {/* Top Logo */}
          <Image src={topLogo} alt="Top Logo" />

          {/* Top Navigation */}
          <ul className="flex space-x-6 py-3 ">
            <li className="flex items-center border-r hover:font-bold border-black pr-6">
              <Link href="/store" className="leading-[14px]">
                Find a Store
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/contact-us" className="hover:font-bold leading-[14px]">
                Help
              </Link>
            </li>
            <li className="flex  items-center border-r border-black pr-6">
              <Link href="/join-us" className="leading-[14px] hover:font-bold">
                Join Us
              </Link>
            </li>
            <li className="flex items-center pr-6">
              <Link href="/login" className="leading-[14px] hover:font-bold">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex px-10 justify-between items-center py-4">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/all-products" className=" hover:font-semibold">New & Featured</Link>
            </li>
            <li>
              <Link href="" className="hover:font-bold">Men</Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold">Women</Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold">Kids</Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold">Sale</Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold">SNKRS</Link>
            </li>
          </ul>
          <div className="flex space-x-6 ">
            <button className="">
              <div className="flex px-4 py-3 w-[180px] rounded-full  bg-[#f5f5f5]">
              <Image src={searchIcon} alt="search" />
              <input
                className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray"
                type="text"
                placeholder="Search"
              />
            </div></button>
            <Image src={wishlistIcon} alt="wishlist" />
            <Image src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-10 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="flex gap-6">
          <Image src={wishlistIcon} alt="wishlist" />
          <Image src={cartIcon} alt="cart" />
          <Link href="#" onClick={toggleMenu}>
            <Image src={menuIcon} width={30} height={30} alt="Menu" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={` w-3/4 h-full p-6 transition-transform duration-300 ease-in-out transform  overflow-y-scroll ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <Image src={logo} alt="Logo" />
            <Link href="#" onClick={toggleMenu}>
              <Image src={crossIcon} width={30} height={30} alt="Close" />
            </Link>
          </div>
          <div className="flex px-4 py-3 mt-6  rounded-full w-[96%] bg-[#f5f5f5]">
            <Image src={searchIcon} alt="search" />
            <input
              className="pl-4 focus-visible:outline-none w-[64%] bg-[#f5f5f5]"
              type="text"
              placeholder="Search"
            />
          </div>
          <ul className="space-y-6 mt-6">
            <li>
              <Link href="#" className="hover:font-bold" onClick={toggleMenu}>
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/all-products" className="hover:font-bold" onClick={toggleMenu}>
                Men
              </Link>
            </li>
            <li>
              <Link href="#"className="hover:font-bold" onClick={toggleMenu}>
                Women
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold" onClick={toggleMenu}>
                Kids
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:font-bold" onClick={toggleMenu}>
                Sale
              </Link>
            </li>
            <li>
              <Link href="#"  className="hover:font-bold" onClick={toggleMenu}>
                SNKRS
              </Link>
            </li>

            <li className="border-t-2 pt-6">
              <Link href="/store" className="hover:font-bold" onClick={toggleMenu}>
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:font-bold" onClick={toggleMenu}>
                Help
              </Link>
            </li>
            <li>
              <Link href="/join-us" className="hover:font-bold" onClick={toggleMenu}>
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:font-bold" onClick={toggleMenu}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;