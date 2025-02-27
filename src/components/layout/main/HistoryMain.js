import Blogs2 from "@/components/sections/blogs/Blogs2";
import CallToAction6 from "@/components/sections/call-to-action/CallToAction6";
import Features6 from "@/components/sections/features/Features6";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import HistoryPrimary from "@/components/sections/history/HistoryPrimary";

const HistoryMain = () => {
  return (
    <main>
      <HeroPrimary title={"Our History"} text={"History"} />
      <HistoryPrimary />
      <Features6 />
      <CallToAction6 />
      <Blogs2 />
    </main>
  );
};

export default HistoryMain;
