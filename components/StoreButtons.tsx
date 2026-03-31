import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">

      <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-3 text-xs font-semibold text-white hover:opacity-90 transition">
        App Store
        <FaApple className="text-lg" />
      </button>

      <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-3 text-xs font-semibold text-white hover:opacity-90 transition">
        Google Play
        <FaGooglePlay className="text-lg" />
      </button>

    </div>
  );
}