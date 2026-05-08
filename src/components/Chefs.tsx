import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chef1 from "../assets/images/guru.png";
import Chef2 from "../assets/images/kepsek.png";
import Chef3 from "../assets/images/kejuruan.png";
import data from "@/data/jadwalPelatihan.json";

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

const groupByMonth = (data: any[]) => {
  return data.reduce((acc, item) => {
    const date = new Date(item.tanggalMulai);
    const month = date.toLocaleString("id-ID", { month: "long" });

    if (!acc[month]) {
      acc[month] = [];
    }

    acc[month].push(item);
    return acc;
  }, {} as Record<string, any[]>);
};

const groupedData = groupByMonth(data);

console.log('groupedData:', groupedData);

const Chefs = () => {
  return (
    <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">

    <h2 className="text-2xl font-bold text-center mb-10">
      Jadwal Pelatihan Tahun 2026
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

  {Object.entries(groupedData).map(([month, items], index) => (
    <div
      key={index}
      className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold text-center mb-2">
        {month}
      </h3>

      <div className="bg-blue-100 text-blue-700 text-xs text-center py-1 rounded-full mb-3">
        {items.length} Pelatihan
      </div>

      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {items.slice(0, 3).map((item, i) => (
          <li key={i} className="line-clamp-2">
            • {item.judul}
          </li>
        ))}
        {items.length > 3 && <li>• ...</li>}
      </ul>

      <button className="text-blue-600 text-xs font-medium hover:underline">
        Lihat Bulan Ini →
      </button>
    </div>
  ))}

</div>
  </div>
</section>
  );
};

export default Chefs;
