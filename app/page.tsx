import { goldSare3, logo } from "@/assets";
import DashboardMockup from "@/components/DashboardMockup";
import FeatureCard from "@/components/FeatureCard";
import FeaturesSection from "@/components/FeaturesSection";
import PhoneMockup from "@/components/PhoneMockup";
import SectionTitle from "@/components/SectionTitle";
import StoreButtons from "@/components/StoreButtons";
import Image from "next/image";

const topFeatures = [
  {
    title: "سهولة الاستخدام",
    desc: "منصة احترافية سهلة الاستخدام",
    icon: "⚙️",
  },
  {
    title: "متعدد البائعين",
    desc: "متاجر متنوعة لتلبية احتياجاتك",
    icon: "🛍️",
  },
  {
    title: "متابعة ودعم الطلبات",
    desc: "متابعة الطلبات والاستفسارات أولًا بأول",
    icon: "📦",
  },
  {
    title: "دعم فني متخصص",
    desc: "دعم فني للاستفسارات والمتابعة",
    icon: "🎧",
  },
];

const merchantFeatures = [
  {
    title: "لوحة تحكم كاملة",
    desc: "لوحة تحكم سهلة وبسيطة",
    icon: "📊",
  },
  {
    title: "متابعة للطلبات",
    desc: "متابعة فورية للطلبات",
    icon: "📍",
  },
  {
    title: "تسجيل للعملاء",
    desc: "تسجيل قاعدة العملاء لديك",
    icon: "👥",
  },
  {
    title: "طرق شحن ودفع آمنة",
    desc: "طرق دفع آمنة وشحن سريع",
    icon: "🚚",
  },
];


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-l from-[#FFEFDD] to-[#F5FFF7] text-[#1f1a17] font-expo">
      <header className="sticky top-0 z-50 bg-gradient-to-l from-[#FFEFDD] to-[#F5FFF7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="text-2xl tracking-tight text-[#f28c28]">
            <Image
              src={logo}
              alt="منجز"
              width={100}
              height={100}
              className="inline-block h-10 w-36"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3d342f] md:flex">
            <a href="#home" className="transition hover:text-[#f28c28]">الرئيسية</a>
            <a href="#features" className="transition hover:text-[#f28c28]">تعرف علينا</a>
            <a href="#contact" className="transition hover:text-[#f28c28]">اتصل بنا</a>
          </nav>

          <a
            href="#merchants"
            className="rounded-md border border-gray-300 px-5 py-2 text-sm font-bold transition hover:bg-[#f28c28] hover:text-white"
          >
            انضم إلينا كتاجر
          </a>
        </div>
      </header>

      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-7">
          <div className="order-2 lg:order-1 text-center md:text-start">
            <p className="mb-3 text-md font-semibold text-[#c48736]">التطبيق الأول كليًا لك</p>
            <h1 className="mb-4 text-4xl leading-tight text-[#ee8a21] md:text-5xl lg:text-6xl font-semibold">
              منجز!
            </h1>
            <h2 className="mb-6 text-2xl font-semibold leading-relaxed text-[#2a211d] md:text-4xl">
              اشتري .. بيع .. أنجز ...
            </h2>
            <p className="max-w-xl text-base leading-8 text-[#5d514b] md:text-lg">
              تطبيق تجارة إلكترونية متعدد البائعين
              <br />
              يربط بين العملاء والمتاجر والمطاعم عبر منصة تقنية حديثة،
              ويعمل وفق منظومة تشغيل احترافية تعتمد على أسطول كهربائي مملوك بالكامل للشركة وكوادر مدربة.
            </p>

            <div className="mt-8 flex flex-col gap-4 items-center md:items-start">
              <div className="flex gap-5">
                <a
                  href="#merchants"
                  className="rounded-lg bg-[#f2a33a] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  حمل التطبيق
                </a>
                <a
                  href="#merchants"
                  className="rounded-lg border border-gray-300 px-7 py-3 text-sm font-bold transition hover:-translate-y-0.5"
                >
                  انضم إلينا كتاجر
                </a>
              </div>

              <StoreButtons />
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle eyebrow="ما يميز منجز" title="تعرف على مميزات منجز" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topFeatures.map((item) => (
              <FeatureCard key={item.title} {...item} center />
            ))}
          </div>
        </div>
      </section>

      <section id="merchants" className="relative overflow-hidden bg-white py-20">
        <Image
          src="/BgSare3.png"
          alt="Background Sare3"
          width={620}
          height={620}
          className="absolute left-0 bottom-20 z-0 opacity-10 pointer-events-none"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#d19a42]">انضم إلينا كتاجر</p>
            <h3 className="mb-4 text-3xl leading-tight text-[#221b17] md:text-3xl">
              انضم إلينا وابدأ تجارتك الإلكترونية الآن
            </h3>
            <p className="mb-8 max-w-xl text-base leading-8 text-[#5d514b]">
              انضم إلينا كتاجر وابدأ بعرض منتجاتك داخل منصة سهلة واحترافية تساعدك في إدارة الطلبات والعملاء
              والشحن والدفع من مكان واحد.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {merchantFeatures.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-md border border-[#d68624] px-7 py-3 text-sm font-bold text-[#d68624]"

            >
              انضم إلينا كتاجر
            </a>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="pt-[90px] pb-[60px] bg-white">
        <div
          className="relative bg-cover bg-center px-8 lg:px-14 py-20"
          style={{ backgroundImage: "url('/BgSection.png')" }}
        >
          <div className="relative grid items-center gap-8 lg:grid-cols-2 mx-auto max-w-7xl">
            <div className="text-white lg:max-w-xl">
              <h3 className="mb-4 text-4xl md:text-5xl">منجز!</h3>
              <h4 className="mb-4 text-2xl font-extrabold md:text-4xl">اشتري .. بيع .. أنجز ...</h4>
              <p className="text-base leading-8 text-white/90 md:text-lg">
                لا تفوت الفرصة للانضمام إلى منصة متعددة البائعين تربط بين العملاء والمتاجر والمطاعم عبر حلول
                تقنية حديثة.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
            </div>

            <div className="lg:absolute lg:left-20">
              <Image
                src="/screen3.png"
                alt="Screen 1"
                width={400}
                height={800}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FeaturesSection />
        </div>
      </section>

      <footer id="contact" className="bg-black py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <div className="mb-5 text-3xl text-[#f2a33a] flex justify-center">
            <Image
              src={goldSare3}
              alt="Gold Sare3"
              width={100}
              height={100}
            />
          </div>
          <p className="mx-auto max-w-3xl text-sm leading-8 text-white/75">
            تطبيق تجارة إلكترونية متعدد البائعين
          </p>
          <p className="mx-auto max-w-3xl text-sm leading-8 text-white/75">
            منجز هي المنصة التي تربط العملاء بالمتاجر والمطاعم عبر تجربة شراء وبيع حديثة، مع تشغيل احترافي
            ودعم متواصل للشركة والتجار والعملاء.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {["in", "x", "f", "◎"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full 
                  border border-white/10 bg-white/5 text-xl font-bold 
                  text-white transition hover:bg-[#f2a33a]
                "
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/55">
            جميع الحقوق محفوظة 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
