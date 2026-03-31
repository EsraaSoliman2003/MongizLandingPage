import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={"/screen1.png"}
        alt="Screen 1"
        fill
        className=""
      />
    </div>
  );
}
