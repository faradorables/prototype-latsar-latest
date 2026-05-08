import CalendarImage from "@/assets/images/calendar.png";
import { useEffect, useState } from "react";

const JadwalHero = () => {
  const [now, setNow] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setNow(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const tanggal = now.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const jam = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  return (
    <section className="relative bg-[#f5f7ff] overflow-hidden">

      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full translate-x-16 -translate-y-8 opacity-70" />

      <div className="container mx-auto px-6 py-10 relative z-10">

        {/* Date */}
        <div className="flex justify-end text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>📅 {tanggal}</span>
            <span>|</span>
            <span>{jam} WIB</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center gap-6">

          {/* Icon */}
          <div className="hidden md:block">
            <img
              src={CalendarImage}
              alt="Calendar"
              className="w-20"
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">
              Jadwal Pelatihan Tahun 2026
            </h1>

            <p className="text-gray-600">
              Informasi lengkap seluruh pelatihan di P4 Jakarta Barat
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JadwalHero;