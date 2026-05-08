import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Kontak Kami
        </h2>

        <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* TELEPON */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow">
              <Phone className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-semibold">Telepon</p>
              <p className="text-sm text-gray-600">
                +62 8123456789
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow">
              <Mail className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-sm text-gray-600">
                p4jb.disdikdki@gmail.com
              </p>
            </div>
          </div>

          {/* ALAMAT */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow">
              <MapPin className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-semibold">Alamat</p>
              <p className="text-sm text-gray-600 max-w-xs">
                Jl. Kerajinan No. 42 Tamansari, Krukut Kota Administrasi Jakarta Barat
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;