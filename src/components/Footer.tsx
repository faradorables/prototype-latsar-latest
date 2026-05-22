import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl font-bold text-center mb-8">
          Hubungi Kami
        </h2>

        {/* DESKTOP */}
        <div className="
          hidden md:flex
          bg-gray-100
          rounded-2xl
          p-6
          justify-between
          items-center
          gap-6
        ">

          {/* TELEPON */}
          <a
            href="https://wa.me/6282297247834"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="
              bg-white
              p-3
              rounded-full
              shadow-sm
              group-hover:scale-105
              transition-all
            ">
              <Phone className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Telepon
              </p>

              <p className="text-sm text-gray-600">
                +62 822-9724-7834
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:p4jb.disdikdki@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="
              bg-white
              p-3
              rounded-full
              shadow-sm
              group-hover:scale-105
              transition-all
            ">
              <Mail className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                E-mail
              </p>

              <p className="text-sm text-gray-600">
                p4jb.disdikdki@gmail.com
              </p>
            </div>
          </a>

          {/* ALAMAT */}
          <a
            href="https://maps.app.goo.gl/DdNLfNVnKVvPdj3Q7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="
              bg-white
              p-3
              rounded-full
              shadow-sm
              group-hover:scale-105
              transition-all
            ">
              <MapPin className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Alamat
              </p>

              <p className="text-sm text-gray-600 max-w-xs">
                Jl. Kerajinan No. 42 Tamansari, Krukut Kota Administrasi Jakarta Barat
              </p>
            </div>
          </a>

        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-4">

          {/* TELEPON */}
          <a
            href="https://wa.me/6282297247834"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-start gap-4
              bg-white
              rounded-2xl
              p-4
              shadow-sm
              border border-gray-100
              active:scale-[0.98]
              transition-all
            "
          >
            <div className="
              shrink-0
              w-12 h-12
              rounded-full
              bg-blue-50
              flex items-center justify-center
            ">
              <Phone className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Telepon
              </p>

              <p className="text-sm text-gray-600">
                +62 822-9724-7834
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:p4jb.disdikdki@gmail.com"
            className="
              flex items-start gap-4
              bg-white
              rounded-2xl
              p-4
              shadow-sm
              border border-gray-100
              active:scale-[0.98]
              transition-all
            "
          >
            <div className="
              shrink-0
              w-12 h-12
              rounded-full
              bg-blue-50
              flex items-center justify-center
            ">
              <Mail className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                E-mail
              </p>

              <p className="text-sm text-gray-600">
                p4jb.disdikdki@gmail.com
              </p>
            </div>
          </a>

          {/* ALAMAT */}
          <a
            href="https://maps.app.goo.gl/DdNLfNVnKVvPdj3Q7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-start gap-4
              bg-white
              rounded-2xl
              p-4
              shadow-sm
              border border-gray-100
              active:scale-[0.98]
              transition-all
            "
          >
            <div className="
              shrink-0
              w-12 h-12
              rounded-full
              bg-blue-50
              flex items-center justify-center
            ">
              <MapPin className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Alamat
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Jl. Kerajinan No. 42 Tamansari, Krukut Kota Administrasi Jakarta Barat
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Footer;