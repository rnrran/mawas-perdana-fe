"use client";
import FooterTimeSchedule from "./FooterTimeSchedule";
import FooterServices from "./FooterServices";
import FooterNewsFeeds from "./FooterNewsFeeds";
import Copyright from "./Copyright";
import { useFooterContex } from "@/providers/FooterContext";
import FooterAbout from "./FooterAbout";
import footerImage1 from "@/assets/img/bg/footer-bg-1.png";
import FooterFeatured from "./FooterFeatured";
import Copyright2 from "./Copyright2";
import FooterAbout2 from "./FooterAbout2";
import FooterCompany from "./FooterCompany";
import FooterServices2 from "./FooterServices2";
import FooterCustomerCare from "./FooterCustomerCare";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <>
      <FooterFeatured /> 
      <footer
        className={`ltn__footer-area ${
          footerStyle === 3 ? "" : "ltn__footer-2"
        }   ${
          footerStyle === 3
            ? ""
            : footerBg === "dark"
            ? "ltn__footer-color-1"
            : "ltn__footer-color-2"
        }`}
      >
        <div
          className={`footer-top-area   ${
            (!footerStyle || footerStyle === 1) && footerBg === "dark"
              ? "section-bg-2"
              : footerStyle === 2 && footerBg === "dark"
              ? "section-bg-2 ooter-top-extra-padding bg-image"
              : footerStyle === 3
              ? footerBg === "dark"
                ? "section-bg-2 plr--5"
                : "section-bg-1 plr--5 "
              : "section-bg-1"
          }`}
          data-bs-bg={
            footerStyle === 2 && footerBg === "dark" ? footerImage1.src : ""
          }
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <FooterAbout />
              <FooterServices />
              <FooterNewsletter />
            </div>
          </div>

        </div>
        {footerStyle === 3 ? <Copyright2 /> : <Copyright />}
      </footer>
    </>
  );
};

export default Footer;
