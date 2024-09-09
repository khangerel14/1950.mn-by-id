"use client";

import { Logo } from "@/images";
import { useRef } from "react";

export const Navbar = ({
  scrollToSection,
  oppor,
  introduction,
  getInTouch,
}: any) => {
  return (
    <div className="border-b border-gray-500 fixed inset-0 bg-black h-20 z-30">
      <div className="flex max-w-screen-xl mx-auto items-center h-20 justify-between">
        <div>
          <button>
            <Logo />
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => scrollToSection(introduction)}
            className="hover:text-[#1D4ED8] font-medium text-white"
          >
            Танилцуулга
          </button>
          <button
            onClick={() => scrollToSection(oppor)}
            className="hover:text-[#1D4ED8] font-medium text-white"
          >
            Боломжууд
          </button>
          <button
            onClick={() => scrollToSection(getInTouch)}
            className="hover:text-[#1D4ED8] font-medium text-white"
          >
            Холбоо барих
          </button>
        </div>
        <div>
          <button className="px-4 py-2 bg-[#1D4ED8] rounded-lg text-white text-sm font-medium">
            Жолооч болох ?
          </button>
        </div>
      </div>
    </div>
  );
};
