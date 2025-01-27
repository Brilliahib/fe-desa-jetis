import { Button } from "@/components/ui/button";

export default function HomeJumbotron() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-center pad-x">
        <div className="space-y-4 md:max-w-3xl">
          <h1 className="text-4xl text-zinc-700 lg:text-6xl font-bold tracking-tighter">
            Sugeng Rawuh di Desa Jetis
          </h1>
          <p>
            Desa Jetis adalah tempat yang kaya akan budaya dan tradisi. Temukan
            berita terkini dan produk unggulan dari UMKM kami.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button>Profil Desa</Button>
            <Button variant={"outline"} className="border-primary text-primary">
              Hubungi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
