import SectionTitle from "@/components/atoms/typography/SectionTitle";
import CardLatestNews from "@/components/molecules/card/CardLatestNews";

export default function HomeNews() {
  return (
    <>
      <div className="space-y-8 md:space-y-16 pad-x">
        <SectionTitle
          category="News"
          title="Berita Terkini"
          description="Berita dan informasi terbaru di desa jetis."
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6">
          <CardLatestNews />
          <CardLatestNews />
          <CardLatestNews />
          <CardLatestNews />
          <CardLatestNews />
          <CardLatestNews />
        </div>
      </div>
    </>
  );
}
