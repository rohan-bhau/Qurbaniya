import Banner from "@/components/Homepage/Banner";
import FeaturedAnimals from "@/components/Homepage/FeaturedAnimals";
import QurbaniTips from "@/components/Homepage/QurbaniTips";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTips />
</div>
  );
}
