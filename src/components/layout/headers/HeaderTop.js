"use client";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";

const HeaderTop = () => {
  const { headerStyle, headerSize, headerTopBg } = useHeaderContex();
  return (
    <div
      className={`ltn__header-top-area ${
        headerStyle === 2 || headerStyle === 4 || headerTopBg === "dark"
          ? "top-area-color-white "
          : ""
      } ${headerSize === "lg" ? "plr--9" : ""}`}
    >
      <div
        className={` ${headerSize === "lg" ? "container-fluid" : "container"}`}
      >
        <div className="row">
          <div className="col-md-7">
            <div className="ltn__top-bar-menu">
              <ul>
                <li>
                  <Link href="mailto:mp.mawas.perdana@gmail.com?Subject=Saya%20Ingin%20Bertanya">
                    <i className="icon-mail"></i> mp.mawas.perdana@gmail.com
                  </Link>
                </li>{" "}
                <li>
                  <Link passHref={true} href="https://www.google.com/maps/place/Bengkel+Mobil+Mawas+Perdana/@-5.1614985,119.473814,17z/data=!3m1!4b1!4m6!3m5!1s0x5155120fff86b01:0x4d1879bace51d479!8m2!3d-5.1614985!4d119.4763889!16s%2Fg%2F11b7gxg1h7?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
                    <i className="icon-placeholder"></i> Jl. Antang Raya No.58, Antang
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="top-bar-right text-end">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    {/* <!-- ltn__language-menu --> */}
                    <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                      <ul>
                        {/* <li>
                          <Link href="#" className="dropdown-toggle">
                            <span className="active-currency">English</span>
                          </Link>
                          <ul>
                            <li>
                              <Link href="#">Arabic</Link>
                            </li>
                            <li>
                              <Link href="#">Bengali</Link>
                            </li>
                            <li>
                              <Link href="#">Chinese</Link>
                            </li>
                            <li>
                              <Link href="#">English</Link>
                            </li>
                            <li>
                              <Link href="#">French</Link>
                            </li>
                            <li>
                              <Link href="#">Hindi</Link>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </div>
                  </li>{" "}
                  <li>
                    {/* <!-- ltn__social-media --> */}
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <Link
                            href="https://www.instagram.com/bengkel_mawasperdana?igsh=MThnbjZ1NWhxcTdtNA=="
                            title="Instagram"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>{" "}
                        <li>
                          <Link
                            href="https://www.tiktok.com/@bengkel.mobil.mawa?lang=id-ID&is_from_webapp=1&sender_device=mobile&sender_web_id=7364243173394728464"
                            title="Tiktok"
                          >
                            <i className="fab fa-tiktok"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
