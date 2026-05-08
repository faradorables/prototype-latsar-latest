import HeroBG from "./../assets/images/header.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="relative bg-[#f5f7ff] overflow-hidden pt-24 pb-16">
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full translate-x-16 -translate-y-8 opacity-70" />

      <div className="container mx-auto px-6 lg:px-12 ">
  {/* DATE */}
        <div className="flex justify-end text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
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
              <Link to="https://jaklat.jakarta.go.id/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0a3abb] text-white px-6 py-3 rounded-lg font-medium">
                  Daftar Sekarang
                </button>
              </Link>
              <Link to="/jadwal">
                <button className="border border-[#0a3abb] text-[#0a3abb] px-6 py-3 rounded-lg font-medium">
                  Lihat Jadwal Lengkap
                </button>
              </Link>
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
