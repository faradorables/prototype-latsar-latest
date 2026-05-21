import React from "react";

// Layout components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Section components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Chefs from "@/components/Chefs";
import TnC from "@/components/TnC";

// Define the main sections of the homepage for easy customization and reordering
const SECTIONS = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "jadwal-bulanan", Component: Chefs },
  { id: "pendaftaran", Component: TnC },
  { id: "hubungi-kami", Component: Footer },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top navigation header */}
      <Header />

      {/* Render all page sections in defined order */}
      {SECTIONS.map(({ id, Component }) => (
        <section key={id} id={id}>
          <Component />
        </section>
      ))}

      {/* Page footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
