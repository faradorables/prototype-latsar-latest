import React from "react";
import OurStoryImg from "../assets/images/about-us.jpg";
import data from "@/data/jadwalPelatihan.json";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Info } from "lucide-react";
// Constants for easy future customization
const SECTION_ID = "about";
const STATS = [
  { value: "50+", label: "Signature Dishes", delay: "800" },
  { value: "5★", label: "Average Rating", delay: "1000" },
  { value: "10K+", label: "Happy Customers", delay: "1200" },
];

const now = new Date();

const upcomingTrainings = data
  // ❌ buang yang sudah selesai
  .filter(item => new Date(item.tanggalSelesai) >= now)

  // ✅ urutkan berdasarkan tanggal mulai terdekat
  .sort((a, b) => new Date(a.tanggalMulai).getTime() - new Date(b.tanggalMulai).getTime())

  // ✅ ambil 5 teratas
  .slice(0, 5);

const formatRangeDate = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameMonth =
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth) {
    return `${startDate.getDate()}–${endDate.getDate()} ${startDate.toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    })}`;
  }

  return `${startDate.getDate()} ${startDate.toLocaleDateString("id-ID", {
    month: "long",
  })} - ${endDate.getDate()} ${endDate.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  })}`;
};

const getStatus = (start: string, end: string) => {
  const now = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (now < startDate) return "Dibuka";
  if (now >= startDate && now <= endDate) return "Dilaksanakan";
  return "Dibuka";
};

const About = () => {
  return (
    <section id={SECTION_ID} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pelatihan Mendatang
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

            {/* HEADER */}
            <thead className="bg-blue-800 text-white text-sm">
              <tr>
                <th className="px-4 py-3 text-left">No</th>
                <th className="px-4 py-3 text-left">Nama Pelatihan</th>
                <th className="px-4 py-3 text-left">Tanggal Pelatihan</th>
                <th className="px-4 py-3 text-left">Jenjang</th>
                <th className="px-4 py-3 text-left">Kuota</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Info</th>
                <th className="px-4 py-3 text-left">Aksi</th>
              </tr>
            </thead>

            {/* BODY */}
           <tbody className="text-sm">
          {upcomingTrainings.map((item, index) => {
            const status = getStatus(item.tanggalMulai, item.tanggalSelesai);
            return (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{item.judul}</td>
              <td className="px-4 py-3">{formatRangeDate(item.tanggalMulai, item.tanggalSelesai)}</td>

              <td className="px-4 py-3">{item.jenjang}</td>

              <td className="px-4 py-3">{item.kuota}</td>

              <td className="px-4 py-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium
                  ${status === "Dibuka"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                  }`}>
                  {status}
                </span>
              </td>
              <td className="px-4 py-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <button>
                      <Info
                        size={20}
                        className="text-blue-600 hover:text-blue-800"
                      />
                    </button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="left"
                    sideOffset={10}
                    className="w-72 bg-white border-2 border-[#0a3abb] text-[#0a3abb] rounded-xl shadow-lg"
                  >
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">
                          Mitra Pelatihan:
                        </span>{" "}
                        {item.mitra}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Syarat dan Ketentuan:
                        </span>{" "}
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                      {item.tnc.map((syaratItem, index) => (
                        <li key={index}>
                          {syaratItem}
                        </li>
                      ))}
                    </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </td>
              <td className="px-4 py-3">
                <Link to="https://jaklat.jakarta.go.id/" target="_blank" rel="noopener noreferrer">
                <button disabled={status === "Dilaksanakan"} className={`${status === "Dilaksanakan" ? "disabled:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-70" : ""} bg-blue-700 text-white px-4 py-1 rounded-md text-xs`}>
                  Daftar
                </button>
                </Link>
              </td>

            </tr>
          )
          })}
        </tbody>

          </table>
        </div>

        {/* FOOTER BUTTON */}
        <div className="text-center mt-6">
          <Link to="/jadwal">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md">
              Lihat Jadwal Lengkap →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
