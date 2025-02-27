import Link from "next/link";
import bgImage9 from "@/assets/img/bg/9.jpg";

const HeroPrimary = ({ text, title, item, type, mb, isCapitalize }) => {
  const { name, path } = item ? item : {};
  return (
    <div
      className={`ltn__breadcrumb-area ${
        type === 3
          ? "ltn__breadcrumb-area-2 plr--9"
          : type === 2
          ? "ltn__breadcrumb-area-3 plr--9"
          : "ltn__breadcrumb-area-2"
      }  ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image ${
        mb ? mb : ""
      }`}
      data-bs-bg={bgImage9.src}
    >
      <div
        className={type === 2 || type === 3 ? "container-fluid" : "container"}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} Welcome to our company
                </h6>
                <h1
                  className={`section-title white-color ${
                    isCapitalize ? "text-capitalize" : ""
                  }`}
                >
                  {title}
                </h1>
              </div>
              <div className="ltn__breadcrumb-list">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>{" "}
                  {item ? (
                    <li>
                      <Link href={path}>{name}</Link>
                    </li>
                  ) : (
                    ""
                  )}{" "}
                  <li>{text}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPrimary;
