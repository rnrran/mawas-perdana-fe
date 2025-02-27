import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import TeamDetailsPrimary from "@/components/sections/team-details/TeamDetailsPrimary";
import React from "react";

const TeamDetailsMain = () => {
  return (
    <main>
      <HeroPrimary title={"Personal Details"} text={"Team Details"} />
      <TeamDetailsPrimary />
    </main>
  );
};

export default TeamDetailsMain;
