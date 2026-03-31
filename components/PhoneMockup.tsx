import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Image
        src="/screen1.png"
        alt="Screen 1"
        width={500}   // adjust as needed
        height={800}  // adjust as needed
        className="mx-auto"
      />
    </div>
  );
}
