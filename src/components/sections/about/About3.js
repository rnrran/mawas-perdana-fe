import teamImage4 from "@/assets/img/team/4.jpg";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
  return (
    <div className="ltn__about-us-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <Image src={teamImage4} alt="About Us Image" />
              <div className="about-us-img-info about-us-img-info-2">
                <div className="about-us-img-info-inner">
                  <h1>
                    20<span>+</span>
                  </h1>
                  <h6>Tahun Pengalaman</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} Tentang Kami
                </h6>
                <h1 className="section-title">
                  Keamanan Adalah Prioritas Utama Kami<span>.</span>
                </h1>
                <p>
                Kami berkomitmen untuk menyediakan layanan perbaikan kendaraan yang aman 
                dan berkualitas tinggi, memastikan setiap detail diperiksa dengan cermat 
                untuk memberikan keamanan terbaik bagi pelanggan kami.
                </p>
              </div>

              <p>
              Dengan pengalaman bertahun-tahun dalam industri otomotif, kami terus berinovasi 
              untuk memenuhi kebutuhan pelanggan. Tim kami terdiri dari teknisi yang ahli 
              dan berpengalaman, didukung oleh teknologi terkini guna memberikan layanan yang 
              cepat, aman, dan terpercaya.{" "}
              </p>
              <div className="btn-wrapper">
                <Link href="/services" className="theme-btn-3 btn btn-effect-4">
                  LAYANAN KAMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
