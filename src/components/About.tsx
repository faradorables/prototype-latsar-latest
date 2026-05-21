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
  .slice(0, 6);

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

const getJenjangColor = (jenjang: string) => {
  switch (jenjang) {
    case "PAUD":
      return "bg-rose-100 text-rose-700";

    case "SD":
      return "bg-green-100 text-green-700";

    case "SMP":
      return "bg-amber-100 text-amber-700";

    case "SMA":
      return "bg-purple-100 text-purple-700";

    case "SMK":
      return "bg-cyan-100 text-cyan-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};

const About = () => {
  return (
    <section id={SECTION_ID} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pelatihan Mendatang
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {upcomingTrainings.map((item) => {

    const status = getStatus(
      item.tanggalMulai,
      item.tanggalSelesai
    );

    return (
      <div
        key={item.id}
        className="
          bg-white
          rounded-2xl
          border
          border-gray-200
          p-5
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >

        {/* TOP */}
        <div className="flex items-start justify-between mb-4">

          {/* ICON */}
          <div
            className="
              w-14
              h-14
              rounded-xl
              bg-blue-50
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            📚
          </div>

          {/* STATUS */}
          <span
            className={`
              px-3
              py-1
              rounded-full
              text-xs
              font-medium

              ${
                status === "Dibuka"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }
            `}
          >
            {status}
          </span>

        </div>

        {/* TITLE */}
        <div className="min-h-[80px]">

          <h3
          title={item.judul}
            className="
              font-semibold
              text-lg
              leading-snug
              text-gray-900
              line-clamp-3
            "
          >
            {item.judul}
          </h3>

        </div>

        {/* JENJANG */}
        <div className="flex flex-wrap gap-2 mb-4">

          <span
            className={`
              inline-block
              text-xs
              px-3
              py-1
              rounded-full
              font-medium
              ${getJenjangColor(item.jenjang)}
            `}
          >
            Jenjang : {item.jenjang}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              item.metode === "daring/online"
                ? "bg-sky-100 text-sky-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {item.metode}
          </span>
        </div>

        {/* DATE */}
        <div
  className="
    mt-5
    flex
    items-center
    gap-2
    text-sm
    font-medium
    text-gray-700
  "
>

  <span className="text-base">
    📅
  </span>

  <span>
    {formatRangeDate(
      item.tanggalMulai,
      item.tanggalSelesai
    )}
  </span>

</div>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between">

          {/* INFO */}
          <Popover>

            <PopoverTrigger asChild>

             <button
              className="
                flex items-center gap-2
                px-3 py-2
                rounded-xl
                border border-blue-200
                text-blue-700
                hover:bg-blue-50
                transition-all
                text-sm
                font-medium
              "
            >
              <Info size={16} />
              Detail
            </button>

            </PopoverTrigger>

            <PopoverContent
              side="top"
              className="
                w-72
                bg-white
                border-2
                border-[#0a3abb]
                text-[#0a3abb]
                rounded-xl
                shadow-lg
              "
            >

              <div className="space-y-2 text-sm">

                <p>
                  <span className="font-semibold">
                    Mitra Pelatihan:
                  </span>{" "}
                  {item.mitra}
                </p>

                <p className="font-semibold">
                  Syarat dan Ketentuan:
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

          {/* BUTTON */}
          <Link
            to="https://jaklat.jakarta.go.id/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button
              disabled={status === "Dilaksanakan"}
              className={`
                px-5
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all

                ${
                  status === "Dilaksanakan"
                    ? "bg-blue-300 text-white cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }
              `}
            >
              Daftar →
            </button>

          </Link>

        </div>

      </div>
    );
  })}

</div>

        {/* FOOTER BUTTON */}
        <div className="text-center mt-6">
          <Link to="/jadwal">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-all">
              Lihat Jadwal Lengkap →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
