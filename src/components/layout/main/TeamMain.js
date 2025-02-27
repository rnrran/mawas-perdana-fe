import CallToaction from "@/components/sections/call-to-action/CallToaction";
import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import CallToAction4 from "@/components/sections/call-to-action/CallToAction4";
import CallToAction6 from "@/components/sections/call-to-action/CallToAction6";
import CallToActionForm from "@/components/sections/call-to-action/CallToActionForm";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Skills2 from "@/components/sections/skills/Skills2";
import TeamPrimary from "@/components/sections/team/TeamPrimary";
import React from "react";

const TeamMain = () => {
  return (
    <main>
      <HeroPrimary title={"Tim Kami"} text={"Tim"} />
      <TeamPrimary />
      <CallToAction3 />
      <Skills2 />
    </main>
  );
};

export default TeamMain;
