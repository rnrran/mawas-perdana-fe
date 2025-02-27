import Brands2 from "@/components/sections/brands/Brands2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Features2 from "@/components/sections/features/Features2";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import React from "react";

const Home2Main = () => {
  return (
    <main>
      <Hero2 />
      {/* <Features /> */}
      {/* <FilterTab /> */}
      <Features2 />
      <CallToAction2 />
      {/* <Products2 /> */}
      {/* <Offer/> */}
      {/* <Video /> */}
      {/* <Testimonials1 /> */}
      <Brands2 />

      <Portfolio2 />
      {/* <Blogs2 /> */}
      {/* <NewsletterModal /> */}
    </main>
  );
};

export default Home2Main;
