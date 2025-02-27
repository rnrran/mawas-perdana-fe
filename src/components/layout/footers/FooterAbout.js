import Link from "next/link";
import React from "react";

const FooterAbout = () => {
  return (
    <div className="col-xl-4 col-md-5">
      <div className="footer-widget footer-about-widget clearfix">
        <h4 className="footer-title">Tentang Kami</h4>
        <p>
          Mawas Perdana adalah bengkel dan cuci mobil yang menawarkan layanan 
          berkualitas. Kami berfokus pada layanan perawatan mobil anda di
          pelayanan untuk memenuhi kebutuhan pelanggan kami di{" "}
          <Link href="https://www.google.com/maps/place/Bengkel+Mobil+Mawas+Perdana/@-5.1614985,119.473814,17z/data=!3m1!4b1!4m6!3m5!1s0x5155120fff86b01:0x4d1879bace51d479!8m2!3d-5.1614985!4d119.4763889!16s%2Fg%2F11b7gxg1h7?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">Antang</Link>. 
          Komitmen kami adalah memberikan layanan yang modern dan efisien untuk meningkatkan daya saing dalam 
          industri otomotif.
        </p>
        <div className="ltn__social-media-4">
          <ul>
            <li>
              <Link href="https://www.instagram.com/bengkel_mawasperdana?igsh=MThnbjZ1NWhxcTdtNA==" title="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>{" "}
            <li>
              <Link href="https://www.tiktok.com/@bengkel.mobil.mawa?lang=id-ID&is_from_webapp=1&sender_device=mobile&sender_web_id=7364243173394728464" title="Tiktok">
                <i className="fab fa-tiktok"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
