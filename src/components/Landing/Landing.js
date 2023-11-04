import React from "react";
import { useImage } from "react-image";
import "./Landing.css";

function Landing() {
  const { src: mapSrc, isLoading: mapLoading } = useImage({
    srcList: "imgs/map.svg",
  });
  const { src: screen1Src, isLoading: screen1Loading } = useImage({
    srcList: "imgs/screen1.svg",
  });
  const { src: screen2Src, isLoading: screen2Loading } = useImage({
    srcList: "imgs/screen2.svg",
  });
  const { src: screen3Src, isLoading: screen3Loading } = useImage({
    srcList: "imgs/screen3.svg",
  });
  const { src: googlePlaySrc, isLoading: googlePlayLoading } = useImage({
    srcList: "imgs/google-play.png",
  });

  return (
    <div className="landing py-5">
      {!mapLoading && <img className="map" src={mapSrc} alt="map" />}
      <div className="container">
        <div className="title">
          <h1>تطبيق قضيتي</h1>
          <p>لمقاطعة منتجات الشركات الداعمة للاحتلال الصهيوني</p>
        </div>
        <div className="screens">
          <div className="row align-items-center">
            <div className="col-md-4">
            <div className="screen phone-small">
              {!screen1Loading && <img src={screen1Src} alt="screen1" />}
            </div>
            </div>
            <div className="col-md-4">
            <div className="screen phone-large">
              {!screen2Loading && <img src={screen2Src} alt="screen2" />}
            </div>
            </div>
            <div className="col-md-4">
            <div className="screen phone-small">

              {!screen3Loading && <img src={screen3Src} alt="screen3" />}
            </div>
            </div>
          </div>
        </div>
        {!googlePlayLoading && (
          <img src={googlePlaySrc} className="google-play" alt="google-play" />
        )}
      </div>
    </div>
  );
}

export default Landing;
