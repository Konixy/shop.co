"use client";

import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import TopBanner from "./hero/top-banner";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-screen z-50">
      <TopBanner />
      <div className="flex flex-row justify-center gap-12 py-4 items-center bg-white">
        <Menu className="block lg:hidden" />
        <Link href="/" className="font-integral text-3xl">
          SHOP.CO
        </Link>
        <ul className="flex-row gap-6 hidden lg:flex">
          <li className="flex flex-row items-center gap-1 cursor-pointer">
            Shop <ChevronDown size={15} />
          </li>
          <li>
            <Link href="/on-sale">On Sale</Link>
          </li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="md:flex hidden flex-row items-center">
          <Search className="-mr-9 z-50 text-neutral-500" size={18} />
          <input
            type="text"
            className="pl-11 bg-neutral-200 py-2 px-4 rounded-full text-black placeholder:text-neutral-500 w-72"
            placeholder="Search for products..."
          ></input>
        </div>
        <div className="flex flex-row gap-4">
          <Search className="block md:hidden" /> <ShoppingCart />{" "}
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
}
