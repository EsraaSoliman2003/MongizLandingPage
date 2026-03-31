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
          <button className="
            w-full mt-2 flex items-center gap-2
            rounded-lg bg-[#f28c28] px-3 py-2 text-md text-white
            hover:bg-[#e57c1f] transition justify-center
          "
          >
            <div className=" relative w-3.5 h-3.5 mt-1">
              <Image
                src={Vector}
                alt="Vector Icon"
                fill
                sizes="14px"
                loading="lazy"
                className=" object-cover"
              />
            </div>
            <div className="">

              متوفر الآن
            </div>
          </button>
        </div>

      </div>

    </div>
  );
}