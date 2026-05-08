import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { Partnerships } from "@/components/sections/Partnerships";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <OperatingModel />
      <Partnerships />
      <WhyUs />
      <Contact />
    </div>
  );
}
