import Image from "next/image";

export default function HomeAbout() {
  return (
    <>
      <section className="pad-x grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
        <Image
          src="/images/sub-hero.png"
          alt="logo"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
        <div className="flex flex-col space-y-8 h-full">
          <h1 className="text-4xl text-zinc-700 lg:text-6xl font-bold tracking-tighter">
            Desa Jetis, tempat yang kaya akan budaya dan tradisi.
          </h1>
          <p>
            Masyarakat Desa Jetis merupakan komunitas masyarakat yang membaur
            dalam suasana kehidupan yang baik dan harmonis seria memiliki rasa
            kekeluargaan yang cukup tinggi.
          </p>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="bg-secondary border p-4 rounded-xl flex flex-col justify-center items-center space-y-2">
              <span className="text-xl sm:text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                📍
              </span>
              <p className="text-center">
                113,617 Hektar <br />
                Luas Wilayah
              </p>
            </div>
            <div className="bg-secondary border p-4 rounded-xl flex flex-col justify-center items-center space-y-2">
              <span className="text-xl sm:text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                👨‍👩‍👧‍👦
              </span>
              <p className="text-center">
                638 + <br />
                Kartu Keluarga
              </p>
            </div>
            <div className="bg-secondary border p-4 rounded-xl flex flex-col justify-center items-center space-y-2">
              <span className="text-xl sm:text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                🧑‍🤝‍🧑
              </span>
              <p className="text-center">
                1800 + <br />
                Jumlah Penduduk
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
