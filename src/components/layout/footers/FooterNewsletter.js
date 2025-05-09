import paymentImage from "@/assets/img/icons/payment-4.png";
import Image from "next/image";

const FooterNewsletter = () => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12 col-12">
      <div className="footer-widget footer-newsletter-widget">
        <h4 className="footer-title">Newsletter</h4>
        <p>Langganan ke artikel mingguan kami.</p>
        <div className="footer-newsletter">
          <form action="#">
            <input type="email" name="email" placeholder="Email*" />
            <div className="btn-wrapper">
              <button className="theme-btn-1 btn" type="submit">
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;
