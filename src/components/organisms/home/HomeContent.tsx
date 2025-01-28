import HomeAbout from "./HomeAbout";
import HomeJumbotron from "./HomeJumbotron";
import HomeLocation from "./HomeLocation";
import HomeNews from "./HomeNews";
import HomeUMKM from "./HomeUMKM";

export default function HomeContent() {
  return (
    <>
      <div className="space-y-12 md:space-y-24 pb-12 md:pb-24">
        <HomeJumbotron />
        <HomeAbout />
        <HomeNews />
        <HomeUMKM />
        <HomeLocation />
      </div>
    </>
  );
}
