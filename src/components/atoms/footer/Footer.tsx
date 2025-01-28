import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#013E50] pad-x py-8">
        <div className="space-y-6">
          <Link
            href={"/"}
            className="w-24 flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="/images/logo-klaten.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="object-cover w-7 h-auto"
            />
            <h1 className="font-black text-white text-xl tracking-tighter leading-4">
              Desa Jetis
            </h1>
          </Link>
          <p className="text-white text-sm">
            © {currentYear} Desa Jetis. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
