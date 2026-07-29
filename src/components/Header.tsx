import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Navigation link configuration for easier future updates
const NAV_ITEMS = [
  { name: "Beranda", href: "/#hero", target: "" },
  { name: "Jadwal", href: "/jadwal", target: "" },
  { name: "Pendaftaran", href: "/#pendaftaran", target: "" },
  { name: "Hubungi Kami", href: "/#hubungi-kami", target: "" },
  { name: "SI-PEKA", href: "https://laporan-lab-p4jb.vercel.app/", target: "_blank" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll event to toggle background blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to the target section and close mobile menu
  const handleNavigation = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
        ? "bg-white/90 backdrop-blur-md shadow-lg"
        : "bg-white"
      }`}
    >
      <nav className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* LOGO */}
            <img
              src={Logo}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />

            {/* TITLE */}
            <div className="hidden lg:block leading-tight">

              <p className="text-[10px] uppercase text-gray-500">
                Dinas Pendidikan Provinsi DKI Jakarta
              </p>

              <h1 className="text-sm font-bold text-gray-900 max-w-md">
                Pusat Pelatihan dan Pengembangan Pendidikan
                Kota Administrasi Jakarta Barat
              </h1>

            </div>

          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">

            {NAV_ITEMS.map(({ name, href, target }) => {

              const isActive =
                window.location.pathname === href;

              return (
                <HashLink 
                  smooth to={href}
                  key={name}
                  target={target || "_self"}
                  rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                >

                  <button
                    className={`
                      px-5
                      py-2
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-gray-100 text-black"
                          : "text-gray-600 hover:bg-gray-100 hover:text-black"
                      }
                    `}
                  >
                    {name}
                  </button>

                </HashLink>
              );
            })}

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div
              className="
                md:hidden
                absolute
                top-full
                left-0
                w-full
                bg-white
                shadow-lg
                border-t
                z-50
              "
            >
              <div className="flex flex-col p-6 space-y-4">

                {NAV_ITEMS.map(({ name, href, target }) => (
                  <Link
                    key={name}
                    to={href}
                    target={target || (href.startsWith("#") ? "_self" : "_blank")}
                    rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                    onClick={() => handleNavigation(href)}
                    className="
                      text-gray-700
                      hover:text-blue-700
                      text-lg
                      font-medium
                      transition
                    "
                  >
                    {name}
                  </Link>
                ))}

              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Header;
