import CTA from "../Section/CTA";
import Features from "../Section/Features";
import Hero from "../Section/Hero";
import HowItWork from "../Section/HowItWork";
import Problem from "../Section/Problem";

function Landingpage() {
  return (
    <div className=" bg-gray-300 w-full ">
      <Hero />
      <Problem />
      <Features />
      <HowItWork />
      <CTA />
    </div>
  );
}

export default Landingpage;
