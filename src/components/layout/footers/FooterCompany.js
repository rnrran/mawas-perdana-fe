import Link from "next/link";
import React from "react";

const FooterCompany = () => {
  return (
    <div className="col-xl-2 col-md-6 col-sm-6 col-12">
      <div className="footer-widget footer-menu-widget clearfix">
        <h4 className="footer-title">Company</h4>
        <div className="footer-menu">
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shop">All Products</Link>
            </li>
            <li>
              <Link href="https://www.google.com/maps?sca_esv=3254d03019e4d8d1&output=search&q=mawas+perdana&source=lnms&fbs=ABzOT_Bu45BAVpt81b-aBVkOewzqPO7bwm5pfQcQCXdEtMKpwkX-8ts_XipHebi0ZjSKc_7uzWOWr5GUVtwKCQ1zKs3KPppWwMAFpZk4YvncuHIuuCQ1ZbMpprfBVyM0jyVgOipQG0uCgp3zlg2zwFiaZcdgtHBnlA_ewIfDQlty97k_-m2LFBkgGTDvE4_bO-FHWJjDKkz-cri5qV0MuiahuHtJXgnFWQ&entry=mc&ved=1t:200715&ictx=111">Locations Map</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterCompany;
