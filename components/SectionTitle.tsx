type Props = {
  eyebrow?: string;
  title: string;
  center?: boolean;
};

export default function SectionTitle({ eyebrow, title, center = false }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-center lg:text-right"}`}>
      {eyebrow ? (
        <p className="mb-2 text-xl font-semibold text-[#d19a42]">{eyebrow}</p>
      ) : null}
      <h3 className="text-3xl text-[#221b17] md:text-4xl font-semibold">{title}</h3>
    </div>
  );
}
