import SectionTitle from "@/components/atoms/typography/SectionTitle";
import CardLatestUMKM from "@/components/molecules/card/CardLatestUMKM";

export default function HomeUMKM() {
  return (
    <>
      <div className="pad-x space-y-8 md:space-y-16">
        <SectionTitle
          category="Produk"
          title="Produk UMKM"
          description="Temukan produk unggulan dari UMKM di Desa Jetis."
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6">
          <CardLatestUMKM />
          <CardLatestUMKM />
          <CardLatestUMKM />
          <CardLatestUMKM />
          <CardLatestUMKM />
          <CardLatestUMKM />
        </div>
      </div>
    </>
  );
}
