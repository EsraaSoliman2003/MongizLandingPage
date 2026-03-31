export default function DashboardMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="w-full max-w-[560px] rounded-[2.5rem] bg-[#161616] p-4 shadow-2xl">
        <div className="rounded-[2rem] bg-[#f6f6f6] p-6">
          <div className="mb-5 grid grid-cols-3 gap-3 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-16 rounded-2xl bg-white shadow-sm" />
            ))}
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-4 w-28 rounded-full bg-slate-200" />
              <div className="h-8 w-20 rounded-full bg-orange-100" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-3 flex-1 rounded-full bg-slate-200" />
                  <div className="h-8 w-20 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
