import { sare3 } from "@/assets";
import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  icon: string;
  center?: boolean;
};

export default function FeatureCard({ title, desc, icon, center = false }: Props) {
  return (
    <div
      className={`rounded-xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]  ${
        center ? "text-center md:text-start" : ""
      }`}
    >
      <Image
        src={sare3}
        alt="feature icon"
        width={60}
        height={60}
        className={`mb-4 ${center ? "mx-auto md:mx-0" : ""}`}
      />
      <h4 className="mb-2 text-lg font-semibold text-[#2a211d]">{title}</h4>
      <p className="text-sm leading-7 text-[#6b5e57]">{desc}</p>
    </div>
  );
}
