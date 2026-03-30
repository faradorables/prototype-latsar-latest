import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chef1 from "../assets/images/guru.png";
import Chef2 from "../assets/images/kepsek.png";
import Chef3 from "../assets/images/kejuruan.png";

// Centralized configuration for chef data
const CHEF_PROFILES = [
  {
    name: "Pendidik",
    title: "Guru",
    image: Chef1,
    bio: "Program peningkatan kompetensi dan digitalisasi pembelajaran.",
    specialties: ["Lihat Jadwal"],
  },
  {
    name: "Tenaga Kependidikan",
    title: "Kepala Sekolah, Wakil Kepala Sekolah, Operator, Pustakawan, dan Laboran",
    image: Chef2,
    bio: "Penguatan tata kelola dan layanan pendukung pendidikan.",
    specialties: ["Lihat Jadwal"],
  },
  {
    name: "Kejuruan",
    title: "Pendidik dan Peserta Didik SMK",
    image: Chef3,
    bio: "Pelatihan berbasis kompetensi link and match industri.",
    specialties: ["Lihat Jadwal"],
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Lihat Jadwal <span className="text-primary">Pelatihan</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Informasi Jadwal Pelatihan bagi Pendidik, Tenaga Kependidikan, dan Kejuruan untuk Tahun Anggaran 2026.
          </p>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEF_PROFILES.map((chef, index) => (
            <Card
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Chef Image with specialties overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={`${chef.name} - ${chef.title}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <ul className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <a
                          key={idx}
                          href="www.x.com"
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 px-3 py-1.5 rounded-full text-xs text-white"
                        >
                          {specialty}
                        </a>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chef Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
                  {chef.name}
                </h3>
                <p className="text-primary font-medium mb-3">{chef.title}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {chef.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
