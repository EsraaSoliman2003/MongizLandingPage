import { Vector } from "@/assets";
import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="w-full max-w-lg mx-auto relative">
      <Image
        src="/screen1.png"
        alt="Screen 1"
        width={500}   // adjust as needed
        height={800}  // adjust as needed
        className="mx-auto"
      />

      <div className="hidden md:flex absolute md:bottom-24 md:-right-5 w-[260px] h-[100px] items-center gap-3 rounded-lg bg-white p-3 shadow">

        {/* Image */}
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src="/Image.png"
            alt="Product"
            fill
            className="object-contain rounded-md"
          />
        </div>

        {/* Text */}
        <div className="text-sm">
          <h5 className="font-semibold text-gray-800">
            منتجات مميزة و متعددة
          </h5>

          <p className="flex gap-2 mt-1">
            <span className="text-[#f28c28] font-bold">99 جنيه</span>
            <span className="text-gray-400 line-through">112 جنيه</span>
          </p>

          <button className="bg-[#f28c28] text-white px-3 py-1 rounded mt-2 flex items-center gap-1 text-xs">
            <Image
              src={Vector}
              alt="Vector Icon"
              width={16}
              height={16}
              className="inline-block ml-1"
            />
            منتج متوفر
          </button>
        </div>

      </div>

    </div>
  );
}
