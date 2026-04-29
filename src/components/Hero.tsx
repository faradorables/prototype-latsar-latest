import { Button } from "@/components/ui/button";
import HeroBG from "./../assets/images/header.jpg";

// Configurable constants for background image and section targets
const MENU_SECTION_ID = "#";
const CONTACT_SECTION_ID = "#";

const Hero = () => {
  // Smooth scroll to a target section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 pt-24 pb-20 min-h-screen flex items-center">
  <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
    
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
</section>
  );
};

export default Hero;
