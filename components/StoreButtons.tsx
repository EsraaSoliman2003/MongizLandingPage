export default function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">

      <button
        className="w-[115px] h-[40px] bg-[url('/apple.png')] bg-cover bg-center rounded-lg hover:scale-105 transition"
      />

      <button
        className="w-[115px] h-[40px] bg-[url('/google.png')] bg-cover bg-center rounded-lg hover:scale-105 transition"
      />

    </div>
  );
}