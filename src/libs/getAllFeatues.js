import productImage1 from "@/assets/img/product/1.png";

const getAllFeatues = () => {
  const features = [
    {
      id: 1,
      title: "Reasonable Price",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "dark",
      bgImg: null,
    },
    {
      id: 2,
      title: "Expert Mechanics",
      img: <i className="icon-car"></i>,
      path: "/team",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "secondary",
      bgImg: productImage1,
    },
    {
      id: 3,
      title: "Fast Feature Delivery",
      img: <i className="icon-mechanic"></i>,
      path: "/services/1",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 4,
      title: "All Kind Brand",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 5,
      title: "Expert Mechanics",
      img: <i className="icon-mechanic"></i>,
      path: "/team",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 6,
      title: "Repair Vehicales",
      img: <i className="icon-repair"></i>,
      path: "/services",
      desc: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 7,
      title: "Paint & Costume",
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
