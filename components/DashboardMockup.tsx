import Image from "next/image";

export default function DashboardMockup() {
  return (
    <div className="relative flex justify-center">
      <Image
        src="/screen2.png"
        alt="Screen 1"
        width={500}   // adjust as needed
        height={800}  // adjust as needed
        className="mx-auto"
      />
    </div>
  );
}
