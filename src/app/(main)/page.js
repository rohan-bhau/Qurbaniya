import Banner from "@/components/Homepage/Banner";
import FAQSection from "@/components/Homepage/Faq";
import FeaturedAnimals from "@/components/Homepage/FeaturedAnimals";
import QurbaniTips from "@/components/Homepage/QurbaniTips";
import TopBreads from "@/components/Homepage/TopBread";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreads />
      <FAQSection />
</div>
  );
}
