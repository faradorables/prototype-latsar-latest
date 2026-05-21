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
    <section
      className="
        relative
        min-h-[650px]
        flex
        items-center
        overflow-hidden
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src={HeroBG}
        alt="Hero"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/50
          to-black/10
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-6
        "
      >

        <div className="max-w-2xl">

          {/* TITLE */}
          <h1
            className="
              text-5xl
              lg:text-7xl
              font-bold
              text-white
              leading-tight
              mb-6
            "
          >
            Informasi Pelatihan
            <br />

            <span className="text-[#d8b36a]">
              P4 Jakarta Barat
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-white/90
              text-lg
              leading-relaxed
              mb-8
              max-w-xl
            "
          >
            Mendukung peningkatan kapasitas tenaga pendidik melalui program pelatihan yang relevan, terstruktur, dan berkelanjutan.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="https://jaklat.jakarta.go.id/" target="_blank" rel="noopener noreferrer">
            <button
              className="
                bg-[#0a3abb]
                hover:bg-blue-800
                text-white
                px-8
                py-4
                rounded-xl
                font-medium
                transition
              "
            >
              Daftar Sekarang
            </button>
            </Link>

            <Link to="/jadwal">

              <button
                className="
                  border
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-black
                  px-8
                  py-4
                  rounded-xl
                  font-medium
                  transition
                "
              >
                Lihat Jadwal Lengkap
              </button>

            </Link>

          </div>

          {/* STATS */}
          <div className="flex gap-5 flex-wrap">

            <div
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-2xl
                px-8
                py-5
                text-white
              "
            >
              <h3 className="text-4xl font-bold">
                30+
              </h3>

              <p className="text-white/80">
                Pelatihan
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-2xl
                px-8
                py-5
                text-white
              "
            >
              <h3 className="text-4xl font-bold">
                1000+
              </h3>

              <p className="text-white/80">
                Kuota
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
