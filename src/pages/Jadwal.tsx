import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JadwalHero from "@/components/JadwalHero";
import AllJadwal from "@/components/AllJadwal";

const Jadwal = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="pt-24">

        <JadwalHero />

        <AllJadwal />

      </main>

      <Footer />
    </div>
  );
};


export default Jadwal;