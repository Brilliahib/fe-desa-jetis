import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function CardLatestUMKM() {
  return (
    <>
      <Card className="hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer">
        <CardHeader>
          <Image
            src="/images/example-umkm.png"
            width={1000}
            height={1000}
            alt="Header Image"
            className="rounded-xl max-h-[250px] object-cover"
          />
        </CardHeader>
        <CardContent>
          <div>
            <h1 className="font-semibold md:text-xl text-base line-clamp-2">
              Kopi Jetis
            </h1>
            <span className="text-sm text-muted-foreground">Rp 55.000</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
