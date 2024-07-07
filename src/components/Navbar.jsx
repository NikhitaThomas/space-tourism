"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <div>
      <div className="flex justify-between pl-8 pt-6 mb-3">
        <div className="flex items-center">
          <Image src="/shared/logo.svg" width={50} height={50} alt="logo" />
        </div>
        <div className="hidden md:block">
          <div className="flex md:gap-6 lg:gap-10 bg-slate-300/20 px-24 pt-10">
            <Link href="/">
              <div className={`${path === "/" ? "border-b-4" : ""} pb-10`}>
                00 HOME
              </div>
            </Link>
            <Link href="/destination">
              <div
                className={`${
                  path === "/destination" ? "border-b-4" : ""
                } pb-10`}
              >
                01 DESTINATION
              </div>
            </Link>
            <Link href="/crew">
              <div className={`${path === "/crew" ? "border-b-4" : ""} pb-10`}>
                02 CREW
              </div>
            </Link>
            <Link href="/technology">
              <div
                className={`${
                  path === "/technology" ? "border-b-4" : ""
                } pb-10`}
              >
                03 TECHNOLOGY
              </div>
            </Link>
          </div>
        </div>
        <div className="block md:hidden justify-end px-4">
          <button className="" onClick={() => setOpen(!open)}>
            <img src="/shared/icon-hamburger.svg" />
          </button>
        </div>
      </div>
      {open && (
        <div className="block md:hidden absolute flex flex-col gap-10 bg-slate-300/95 p-10 px-12 w-full">
          <Link href="/">
            <div className={`${path === "/" ? "text-black" : ""}`}>00 HOME</div>
          </Link>
          <Link href="/destination">
            <div className={`${path === "/destination" ? "text-black" : ""}`}>
              01 DESTINATION
            </div>
          </Link>
          <Link href="/crew">
            <div className={`${path === "/crew" ? "text-black" : ""}`}>
              02 CREW
            </div>
          </Link>
          <Link href="/technology">
            <div className={`${path === "/technology" ? "text-black" : ""}`}>
              03 TECHNOLOGY
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
