import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chef1 from "../assets/images/guru.png";
import Chef2 from "../assets/images/kepsek.png";
import Chef3 from "../assets/images/kejuruan.png";

// Centralized configuration for chef data
const months = [
  {
    name: "Januari",
    total: 5,
    items: ["Pelatihan A", "Pelatihan B", "Pelatihan C", "Pelatihan D"],
  },
  {
    name: "Februari",
    total: 3,
    items: ["Pelatihan A", "Pelatihan B", "Pelatihan C"],
  },
  {
    name: "Maret",
    total: 3,
    items: ["Pelatihan A", "Pelatihan B", "Pelatihan C"],
  },
  {
    name: "April",
    total: 7,
    items: ["Pelatihan A", "Pelatihan B", "Pelatihan C", "Pelatihan D"],
  },
  {
    name: "Mei",
    total: 2,
    items: ["Pelatihan A", "Pelatihan B"],
  },
];

const TnC = () => {
  return (
  <section className="py-10 bg-gray-50">
  <div className="container mx-auto px-6">

    <h2 className="text-2xl font-bold text-center mb-6">
      Pendaftaran
    </h2>

    <div className="bg-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-full text-xl">
          👥
        </div>
        <div>
          <p className="font-semibold">Kuota Peserta</p>
          <p className="text-sm text-gray-600">
            Maksimal per pelatihan
          </p>
        </div>
      </div>

      <div className="text-4xl font-bold text-blue-700">
        40
        <span className="text-sm font-normal text-gray-600 ml-1">
          Orang
        </span>
      </div>

      {/* RIGHT */}
      <div className="md:ml-auto">
        <p className="font-semibold mb-2">
          Syarat dan ketentuan umum
        </p>

        <ul className="text-sm text-gray-700 space-y-1">
          <li>✔ Peserta merupakan tenaga kependidikan sesuai jenjang</li>
          <li>✔ Peserta dari wilayah satuan pendidikan terkait</li>
        </ul>
      </div>

    </div>

  </div>
</section>
  );
};

export default TnC;
