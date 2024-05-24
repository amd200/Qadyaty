import React from "react";
import "./Landing.css";

function Landing() {


  return (
    <div className="landing py-5">
      <img className="map" src="imgs/map.svg" alt="map" />
      <div className="container">
        <div className="title">
          <h1>تطبيق قضيتي</h1>
          <p>لمقاطعة منتجات الشركات الداعمة للاحتلال الصهيوني</p>
        </div>
        <div className="screens">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="screen phone-small">
                <img src="imgs/screen1.svg" alt="screen1" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="screen phone-large">
                <img src="imgs/screen2.svg" alt="screen2" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="screen phone-small">
                <img src="imgs/screen3.svg" alt="screen3" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="imgs/google-play.png"
          className="google-play"
          alt="google-play"
        />
      </div>
    </div>
  );
}

export default Landing;
