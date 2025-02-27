import productImage1 from "@/assets/img/product/1.png";

const getAllFeatues = () => {
  const features = [
    {
      id: 1,
      title: "Harga Terjangkau",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "dark",
      bgImg: null,
    },
    {
      id: 2,
      title: "Mekanik Ahli",
      img: <i className="icon-car"></i>,
      path: "/team",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "secondary",
      bgImg: productImage1,
    },
    {
      id: 3,
      title: "Semua Merek Mobil",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 4,
      title: "Mekanik Ahli",
      img: <i className="icon-mechanic"></i>,
      path: "/team",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 5,
      title: "Perbaikan Kendaraan",
      img: <i className="icon-repair"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 6,
      title: "Harga Terjangkau",
      img: <i className="icon-car-parts-9"></i>,
      path: "/appointment",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
  ];

  return features;
};

export default getAllFeatues;
  