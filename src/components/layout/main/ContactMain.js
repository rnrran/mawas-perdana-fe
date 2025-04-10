import Adress from "@/components/sections/address/Adress";
import ContactPrimary from "@/components/sections/contacts/ContactPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Map2 from "@/components/shared/map/Map2";
import React from "react";

const ContactMain = () => {
  return (
    <main>
      <HeroPrimary title={"Hubungi Kami"} text="Kontak" />
      <Adress />
      {/* <ContactPrimary /> */}
      <Map2 />
    </main>
  );
};

export default ContactMain;
