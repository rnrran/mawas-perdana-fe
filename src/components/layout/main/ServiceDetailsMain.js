import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ServiceDetailsPrimary from "@/components/sections/service-details/ServiceDetailsPrimary";

const ServiceDetailsMain = () => {
  return (
    <main>
      <HeroPrimary
        title={"Service Details"}
        text="Car Repair"
        item={{ name: "Service", path: "/services" }}
      />
      <ServiceDetailsPrimary />
    </main>
  );
};

export default ServiceDetailsMain;
