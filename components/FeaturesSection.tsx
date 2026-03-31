"use client";

import { delivery, money, support } from "@/assets";
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <section className="container py-12 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

                {/* الكارد الأول */}
                <div className="group flex flex-col items-center text-center p-6 rounded-xl border border-[#ddd] bg-white
                        transition-all duration-200 hover:shadow-md">
                    <Image
                        src={support}
                        alt="support"
                        width={50}
                        height={50}
                        className="transition-transform duration-200 group-hover:scale-105"
                    />
                    <h3 className="font-bold text-lg mb-2 transition-colors group-hover:text-orange-500">
                        {"دعم 24 ساعة"}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-45">
                        {"عندما يحدث خطأ ما"}
                    </p>
                </div>

                {/* الكارد الثاني */}
                <div className="group flex flex-col items-center text-center p-6 rounded-xl border border-[#ddd] bg-white
                        transition-all duration-200 hover:shadow-md">
                    <Image
                        src={money}
                        alt="money"
                        width={50}
                        height={50}
                        className="transition-transform duration-200 group-hover:scale-105"
                    />
                    <h3 className="font-bold text-lg mb-2 transition-colors group-hover:text-orange-500">
                        {"كاش باك"}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        عند الدفع مقابل المنتجات عبر
                        <br />
                        محفظة داسون
                    </p>
                </div>

                {/* الكارد الثالث */}
                <div className="group flex flex-col items-center text-center p-6 rounded-xl border border-[#ddd] bg-white
                        transition-all duration-200 hover:shadow-md">
                    <Image
                        src={delivery}
                        alt="delivery"
                        width={50}
                        height={50}
                        className="transition-transform duration-200 group-hover:scale-105"
                    />
                    <h3 className="font-bold text-lg mb-2 transition-colors group-hover:text-orange-500">
                        {"توصيل مجاني"}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        للطلبات
                        <br />
                        التي تزيد قيمتها عن 1500
                        <br />
                        دولار
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
