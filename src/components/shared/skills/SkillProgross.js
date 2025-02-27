import React from "react";

const SkillProgross = () => {
  return (
    <div className="ltn__progress-bar-wrap">
      <div className="section-title-area ltn__section-title-2">
          <h6 className="section-subtitle ltn__secondary-color">{"//"} skills</h6>
          <h1 className="section-title">
            Tim Kami Terdiri Dari Mekanik Ahli<span>.</span>
          </h1>
          <p>
            Tim mekanik kami memiliki pengalaman bertahun-tahun di bidang perbaikan kendaraan, 
            menggunakan teknik modern untuk memastikan kendaraan Anda selalu dalam kondisi sempurna.
          </p>
        </div>
      <div className="ltn__progress-bar-inner">
        <div className="ltn__progress-bar-item">
          <p>Perbaikan Mobil</p>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay=".5s"
              role="progressbar"
              style={{ width: "85%" }}
            >
              <span>85%</span>
            </div>
          </div>
        </div>
        <div className="ltn__progress-bar-item">
          <p>Car Cleaning & Parts</p>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay=".5s"
              role="progressbar"
              style={{ width: "81%" }}
            >
              <span>81%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgross;
