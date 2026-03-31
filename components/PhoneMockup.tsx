import { Vector } from "@/assets";
import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="w-full max-w-lg mx-auto relative flex justify-center">

      {/* Phone */}
      <Image
        src="/screen1.png"
        alt="Screen 1"
        width={500}
        height={800}
        className="mx-auto drop-shadow-2xl"
      />

      {/* Floating Card */}
      <div className="hidden md:flex absolute bottom-16 -right-6 w-[280px] items-center gap-4 rounded-xl bg-white/90 backdrop-blur-md p-2 shadow-xl border border-white/40 transition">

        {/* Image */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
          <Image
            src="/Image.png"
            alt="Product"
            fill
            className="object-contain p-1"
          />
        </div>

        {/* Text */}
        <div className="text-sm">
          <h5 className="font-semibold text-gray-800 leading-snug">
            منتجات مميزة و متعددة
          </h5>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#f28c28] font-bold text-base">99 جنيه</span>
            <span className="text-gray-400 line-through text-xs">112 جنيه</span>
          </div>

          {/* Button */}
          <button className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#f28c28] px-3 py-1 text-xs text-white shadow hover:bg-[#e57c1f] transition">
            <Image
              src={Vector}
              alt="Vector Icon"
              width={14}
              height={14}
            />
            متوفر الآن
          </button>
        </div>

      </div>

    </div>
  );
}