import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function CardLatestNews() {
  return (
    <>
      <Card className="hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer">
        <CardHeader>
          <Image
            src="/images/marquee/marquee-1.png"
            width={1000}
            height={1000}
            alt="Header Image"
            className="rounded-xl"
          />
        </CardHeader>
        <CardContent>
          <div>
            <h1 className="font-semibold md:text-xl text-base line-clamp-2">
              Perkembangan UMKM Desa
            </h1>
            <span className="text-sm text-muted-foreground">
              25 Januari 2025
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
