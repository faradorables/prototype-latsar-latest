import data from "@/data/jadwalPelatihan.json";
import { useMemo, useState } from "react";
import {
  Search,
  Calendar,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AllJadwal = () => {
    const [search, setSearch] = useState("");
    const [bulan, setBulan] = useState("Semua Bulan");
    const [jenjang, setJenjang] = useState("Semua Jenjang");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 5;
    const MONTH_NAMES = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
    ];
    const getStatus = (start: string, end: string) => {
    const now = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (now < startDate) return "Dibuka";
    if (now >= startDate && now <= endDate) return "Dilaksanakan";
    return "Dibuka";
    };

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

    const filteredData = useMemo(() => {
    return data.filter((item) => {

        // SEARCH
        const matchSearch =
        item.judul
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        item.jenjang
            .toLowerCase()
            .includes(search.toLowerCase());

        // FILTER BULAN
        const itemDate = new Date(item.tanggalMulai);

        const itemMonth = MONTH_NAMES[itemDate.getMonth()];

        const matchBulan =
        bulan === "Semua Bulan" ||
        itemMonth === bulan;

        // FILTER JENJANG
        const matchJenjang =
        jenjang === "Semua Jenjang" ||
        item.jenjang === jenjang;

        return (
        matchSearch &&
        matchBulan &&
        matchJenjang
        );
    });
    }, [search, bulan, jenjang]);

    const totalPages = Math.ceil(
    filteredData.length / ITEMS_PER_PAGE
    );

    const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
    );

    console.log('totalPages', filteredData.length, paginatedData)
    return (
        <section className="bg-[#f8f9fc] py-10">
            <div className="container mx-auto px-6">

                {/* FILTER */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">

                {/* SEARCH */}
                <div className="relative flex-1">
                    <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                    type="text"
                    placeholder="Cari pelatihan berdasarkan nama atau jenjang..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="
                        w-full
                        border
                        rounded-lg
                        pl-12
                        pr-4
                        py-3
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#0a3abb]
                    "
                    />
                </div>

                {/* BULAN */}
                <div className="relative">
                    <Calendar
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <select
                    value={bulan}
                    onChange={(e) => {
                        setBulan(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="
                        border
                        rounded-lg
                        pl-12
                        pr-10
                        py-3
                        bg-white
                        min-w-[220px]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#0a3abb]
                    "
                    >
                    <option>Semua Bulan</option>

                    {MONTH_NAMES.map((month) => (
                        <option key={month}>
                        {month}
                        </option>
                    ))}
                    </select>
                </div>

                {/* JENJANG */}
                <div className="relative">
                    <GraduationCap
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <select
                    value={jenjang}
                    onChange={(e) => {
                        setJenjang(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="
                        border
                        rounded-lg
                        pl-12
                        pr-10
                        py-3
                        bg-white
                        min-w-[220px]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#0a3abb]
                    "
                    >
                    <option>Semua Jenjang</option>
                    <option>PAUD</option>
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                    <option>SMK</option>
                    <option>NFK</option>
                    </select>
                </div>

                </div>

                {/* TABLE */}
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
          {paginatedData.map((item, index) => {
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
                <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-xs">
                  Daftar
                </button>
              </td>

            </tr>
          )
          })}
        </tbody>

          </table>
        </div>

                {/* PAGINATION */}
                <div className="flex justify-center items-center gap-3 mt-8">

                {/* PREV */}
                <button
                    onClick={() =>
                    setCurrentPage((prev) =>
                        Math.max(prev - 1, 1)
                    )
                    }
                    className="
                    w-10 h-10
                    border rounded-full
                    flex items-center justify-center
                    hover:bg-gray-100
                    "
                >
                    <ChevronLeft size={18} />
                </button>

                {/* PAGE NUMBERS */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`
                        w-10 h-10 rounded-full border transition
                        ${
                        currentPage === i + 1
                            ? "bg-[#0a3abb] text-white border-[#0a3abb]"
                            : "hover:bg-gray-100"
                        }
                    `}
                    >
                    {i + 1}
                    </button>
                ))}

                {/* NEXT */}
                <button
                    onClick={() =>
                    setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                    )
                    }
                    className="
                    w-10 h-10
                    border rounded-full
                    flex items-center justify-center
                    hover:bg-gray-100
                    "
                >
                    <ChevronRight size={18} />
                </button>

                </div>

            </div>
        </section>
    )
};

export default AllJadwal;