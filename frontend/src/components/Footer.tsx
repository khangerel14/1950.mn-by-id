"use client";

import { Apple, Logo, Playstore } from "@/images";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  const getInTouch = () => {
    router.push("/getInTouch");
  };
  const introduction = () => {
    router.push("/introduction");
  };
  const oppor = () => {
    router.push("/opportunity");
  };
  return (
    <div className="flex flex-col items-center justify-end gap-16 text-white py-5 mt-14">
      <div className="flex flex-col gap-12 items-center">
        <Logo />
        <div className="flex gap-8 items-center">
          <button className="flex gap-3 rounded-full px-5 p-3 border items-center shadow-xl bg-white text-black">
            <Apple />
            <div>
              <h1>Available on the</h1>
              <p className="text-gray-500 font-normal">App Store</p>
            </div>
          </button>
          <button className="flex gap-3 rounded-full px-8 p-3 border items-center shadow-xl bg-white text-black">
            <Playstore />
            <div>
              <h1>Get in on</h1>
              <p className="text-gray-500 font-normal">Google Play</p>
            </div>
          </button>
        </div>
        <div className="flex gap-14 text-gray-600">
          <button className="text-gray" onClick={introduction}>
            Танилцуулга
          </button>
          <button className="text-gray" onClick={oppor}>
            Боломжууд
          </button>
          <button className="text-gray" onClick={getInTouch}>
            Холбоо барих
          </button>
        </div>
      </div>
      <div>
        <p>Бүх эрх хуулиар хамгаалагдсан ©2023</p>
      </div>
    </div>
  );
};
