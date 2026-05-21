import React from "react";
import {
  Users,
  FileText,
  Video,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const TnC = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Pendaftaran
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all">

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white p-3 rounded-xl">
                <Users size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Kuota Peserta
                </p>

                <p className="text-sm text-gray-500">
                  Maksimal per pelatihan
                </p>
              </div>
            </div>

            <div className="flex items-end gap-2 mb-5">
              <span className="text-5xl font-bold text-blue-700">
                40
              </span>

              <span className="text-gray-600 mb-1">
                Orang
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-4">
              Syarat & Ketentuan
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">

              <li className="flex gap-2">
                <CheckCircle
                  size={18}
                  className="text-green-500 mt-0.5"
                />
                Peserta merupakan tenaga kependidikan sesuai jenjang
              </li>

              <li className="flex gap-2">
                <CheckCircle
                  size={18}
                  className="text-green-500 mt-0.5"
                />
                Peserta berasal dari wilayah satuan pendidikan terkait
              </li>

              <li className="flex gap-2">
                <CheckCircle
                  size={18}
                  className="text-green-500 mt-0.5"
                />
                Membawa surat tugas resmi dari sekolah
              </li>

            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all">

            <h3 className="font-semibold text-lg mb-5">
              Cara Mendaftar Pelatihan
            </h3>

            <div className="space-y-4 text-sm text-gray-700">

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
                  1
                </div>
                <a href="https://jaklat.jakarta.go.id" target="_blank" rel="noopener noreferrer">Login ke https://jaklat.jakarta.go.id</a>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    bg-blue-600 text-white
                    min-w-6 h-6
                    rounded-full
                    flex items-center justify-center
                    text-xs font-semibold
                    shrink-0 mt-0.5
                  "
                >
                  2
                </div>

                <p className="text-sm leading-relaxed">
                  Pilih pelatihan di menu Pelatihan dan submenu Kalender Pelatihan
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
                  3
                </div>
                <p>Klik tombol Daftar</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
                  4
                </div>
                <p>Tunggu konfirmasi dari admin</p>
              </div>

            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all">

            <h3 className="font-semibold text-lg mb-5">
              Panduan Pembuatan Akun Jaklat
            </h3>

            <div className="space-y-4">
              <a href="https://drive.google.com/uc?export=download&id=1M7M0a4TwUYJzhkCvtY0zAFweN49-mv8x" rel="noopener noreferrer" className="block">
              <button className="w-full flex items-center gap-3 bg-green-50 hover:bg-green-100 transition-all border border-green-200 rounded-xl p-4">

                <div className="bg-green-500 text-white p-2 rounded-lg">
                  <FileText size={20} />
                </div>

                <div className="text-left">
                  <p className="font-medium text-sm">
                    Unduh Tutorial Pembuatan Akun Jaklat
                  </p>
                </div>

              </button>
              </a>
              <a href="https://youtu.be/MKNfbX2IvBg" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full flex items-center gap-3 bg-red-50 hover:bg-red-100 transition-all border border-red-200 rounded-xl p-4">

                <div className="bg-red-500 text-white p-2 rounded-lg">
                  <Video size={20} />
                </div>

                <div className="text-left">
                  <p className="font-medium text-sm">
                    Video Tutorial
                  </p>

                  <p className="text-xs text-gray-500">
                    Cara pembuatan akun Jaklat
                  </p>
                </div>
              </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TnC;