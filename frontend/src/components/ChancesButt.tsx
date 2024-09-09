"use client";

import { Star } from "@/images/Star";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import { BlackBor } from "@/images";

export const ChancesButt = () => {
  const [imageSrc, setImageSrc] = useState("/taxi.webp");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".card")
    ) as HTMLElement[];
    VanillaTilt.init(elements, {
      max: 50,
      speed: 50,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div className="flex max-w-screen-xl justify-between mx-auto mt-20 gap-20">
      <div className="flex flex-col gap-8 w-[450px]">
        <button
          onClick={() => setImageSrc("/location.webp")}
          className="flex text-start img-1 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 ml-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Такси
        </button>
        <button
          onClick={() => setImageSrc("/cabshare.webp")}
          className="flex text-start img-2 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Хүргэлт
        </button>
        <button
          onClick={() => setImageSrc("/ongoing.webp")}
          className="flex text-start img-3 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 ml-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Замын мэдээлэл харах
        </button>
        <button
          onClick={() => setImageSrc("/chat.webp")}
          className="flex text-start img-4 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Урьдчилсан үнэ тооцоолох боломж
        </button>
        <button
          onClick={() => setImageSrc("/location.webp")}
          className="flex text-start img-5 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 ml-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Урьдчилсан захиалга
        </button>
      </div>
      <div>
        <div className="card h-[330px] w-52 bg-gray-500 relative">
          <Image
            src={imageSrc}
            alt="Banner"
            id="banner"
            className="absolute inset-0 bg-cover z-50"
            width={220}
            height={220}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-[450px] items-end">
        <button
          onClick={() => setImageSrc("/point.webp")}
          className="flex text-start img-6 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 mr-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Үнэлгээ систем
        </button>
        <button
          onClick={() => setImageSrc("/profile.webp")}
          className="flex text-start img-7 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Урамшуулал бонусын систем
        </button>
        <button
          onClick={() => setImageSrc("/waiting.webp")}
          className="flex text-start img-8 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 mr-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Аялалын үеийн хамгаалалт
        </button>
        <button
          onClick={() => setImageSrc("/ongoing.webp")}
          className="flex text-start img-9 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Жолоочтой бичгээр харилцах
        </button>
        <button
          onClick={() => setImageSrc("/profile.webp")}
          className="flex text-start img-10 gap-2 items-center text-light bg-white border rounded-full w-[370px] p-2 py-1 mr-14"
        >
          <div className="h-9 w-9 rounded-full bg-black hover:bg-white border">
            <BlackBor />
            <Star />
          </div>
          Аялалаа хуваалцах
        </button>
      </div>
    </div>
  );
};
