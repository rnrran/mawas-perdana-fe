import Image from "next/image";
import contactImage7 from "@/assets/img/icons/7.png";
import contactImage8 from "@/assets/img/icons/8.png";
import contactImage9 from "@/assets/img/icons/9.png";
import Link from "next/link";

const FooterFeatured = () => {
  const contact = [
    {
      title: "Wangsaff",
      subTitle: "+123-456-789",
      img: contactImage7,
      path: "tel:+123456789",
    },
    {
      title: "Email Kami",
      subTitle: "mp.mawas.perdana@gmail.com",
      img: contactImage8,
      path: "mailto:mp.mawas.perdana@gmail.com",
    },
    {
      title: "Alamat Bengkel",
      subTitle: "Jl. Antang Raya No.58, Antang",
      img: contactImage9,
      path: "https://www.google.com/maps/place/Bengkel+Mobil+Mawas+Perdana/@-5.1614985,119.473814,17z/data=!3m1!4b1!4m6!3m5!1s0x5155120fff86b01:0x4d1879bace51d479!8m2!3d-5.1614985!4d119.4763889!16s%2Fg%2F11b7gxg1h7?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    },
  ];
  return (
    <div className="contact-feature-area before-bg-bottom mb--30">
      <div className="container">
        <div className="row justify-content-center">
          {contact?.map(({ title, subTitle, img, path }, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12">
              <div className="ltn__contact-feature-item">
                <div className="ltn__contact-feature-icon">
                  <Image src={img} alt="Icon Image" />
                </div>
                <div className="ltn__contact-feature-info">
                  <Link href={path}>
                    <span className="h6">{subTitle}</span>
                    <br />
                    <span className="h2">{title}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterFeatured;
