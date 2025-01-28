import HomeAbout from "./HomeAbout";
import HomeJumbotron from "./HomeJumbotron";
import HomeNews from "./HomeNews";

export default function HomeContent() {
  return (
    <>
      <div className="space-y-12 md:space-y-24">
        <HomeJumbotron />
        <HomeAbout />
        <HomeNews />
      </div>
    </>
  );
}
