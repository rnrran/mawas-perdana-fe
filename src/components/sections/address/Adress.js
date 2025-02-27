import Image from "next/image";
import iconImage10 from "@/assets/img/icons/10.png";
import iconImage11 from "@/assets/img/icons/11.png";
import iconImage12 from "@/assets/img/icons/12.png";

const Adress = () => {
  return (
    <div className="ltn__contact-address-area mb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage10} alt="Icon Image" />
              </div>
              <h3>Alamat Email</h3>
              <p>
                mp.mawas.perdana@gmail.com <br /> {""}
                mp.mawas.perdana@gmail.com
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage11} alt="Icon Image" />
              </div>
              <h3>Nomor Telepon</h3>
              <p>
                +0123-456789 <br /> +987-6543210
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage12} alt="Icon Image" />
              </div>
              <h3>Alamat</h3>
              <p>
                Jl. Antang Raya No.58, Antang,  <br />
                Kec. Manggala, Kota Makassar, Sulsel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
