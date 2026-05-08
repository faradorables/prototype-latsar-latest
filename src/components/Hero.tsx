import HeroBG from "./../assets/images/header.png";
import { useEffect, useState } from "react";

// Configurable constants for background image and section targets
const MENU_SECTION_ID = "#";
const CONTACT_SECTION_ID = "#";

const Hero = () => {
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

  // Smooth scroll to a target section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log('tanggal:', tanggal);

  return (
    <section className="relative bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
  {/* DATE */}
        <div className="bg-gray-50 top-20 flex justify-end z-20 mb-4">
          <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-md text-sm text-gray-700 flex items-center gap-2 shadow-sm">
            <span>📅 {tanggal}</span>
            <span>|</span>
            <span>{jam} WIB</span>
          </div>
        </div>

    {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Informasi Pelatihan <br /> P4 Jakarta Barat
            </h1>

            <p className="text-gray-600 mb-6">
              Tingkatkan kompetensi dan profesionalitas melalui berbagai pelatihan berkualitas
              yang diselenggarakan Pusat Pelatihan dan Pengembangan Pendidikan Kota Administrasi Jakarta Barat.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0a3abb] text-white px-6 py-3 rounded-lg font-medium">
                Daftar Sekarang
              </button>

              <button className="border border-[#0a3abb] text-[#0a3abb] px-6 py-3 rounded-lg font-medium">
                Lihat Jadwal Lengkap
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-8 mt-8 text-sm text-gray-600">
              <div>
                <p className="text-xl font-bold text-[#0a3abb]">30+</p>
                <p>Pelatihan Berkualitas</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0a3abb]">1000+</p>
                <p>Kuota Tersedia</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-md">
            <img src={HeroBG} alt="Hero" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
