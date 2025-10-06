import Hero from "@/components/Hero";
import Overview from "@/components/Overview";

import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      {/* Services Section Title */}
      <SectionTitle centered subtitle="Discover what we offer">
        Our Services
      </SectionTitle>
    </>
  );
}
