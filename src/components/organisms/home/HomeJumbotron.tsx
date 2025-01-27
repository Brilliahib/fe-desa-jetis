import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { asset } from "@/data/data-marquee";
import Image from "next/image";

export default function HomeJumbotron() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center items-center text-center pad-x md:pt-36 pt-28">
          <div className="space-y-4 md:max-w-3xl">
            <h1 className="text-4xl text-zinc-700 lg:text-6xl font-bold tracking-tighter">
              Sugeng Rawuh di Desa Jetis
            </h1>
            <p>
              Desa Jetis adalah tempat yang kaya akan budaya dan tradisi.
              Temukan berita terkini dan produk unggulan dari UMKM kami.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button>Profil Desa</Button>
              <Button
                variant={"outline"}
                className="border-primary text-primary"
              >
                Hubungi
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-10 md:mt-16 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {asset.map((item, i) => (
              <div
                key={i}
                className="md:mx-2 flex max-w-none cursor-default items-center gap-x-2 text-sm"
              >
                <Image
                  src={item.image || "/vercel.svg"}
                  alt="logo"
                  width={500}
                  height={200}
                  className="rounded object-cover md:h-[350px] md:w-[500px] w-[300px] h-[200px]"
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </>
  );
}
