import Image from "next/image";
import serviceImage11 from "@/assets/img/service/11.jpg";
import Link from "next/link";

const About4 = () => {
  return (
    <div className="ltn__about-us-area pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
              <Image src={serviceImage11} alt="Image" />
            </div>
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} LAYANAN TERPERCAYA
                </h6>
                <h1 className="section-title">
                  Kami Profesional & Berkualifikasi<span>.</span>
                </h1>
                <p>
                  Kami menyediakan layanan perbaikan dan perawatan kendaraan dengan standar profesional tertinggi, 
                  ditangani oleh tenaga ahli berpengalaman untuk memastikan kendaraan Anda tetap dalam kondisi prima.
                </p>
              </div>

              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                  Dengan komitmen terhadap kualitas dan keandalan, kami menggunakan peralatan modern 
                  dan teknik terbaru untuk memberikan hasil yang memuaskan. Dukungan kami tersedia 24/7, 
                  memastikan Anda mendapat layanan yang cepat dan efisien kapan pun dibutuhkan.
                </p>

                <div className="list-item-with-icon">
                  <ul>
                    <li>
                      <Link href="/contact">Dukungan Online 24/7</Link>
                    </li>
                    <li>
                      <Link href="/team">Tim Ahli</Link>
                    </li>
                    <li>
                      <Link href="/services/">Peralatan Modern</Link>
                    </li>
                    <li>
                      <Link href="/shop">Ketersediaan Produk Lebih</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
