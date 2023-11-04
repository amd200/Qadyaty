import React from "react";
import Title from "../TitleSection/Title";
import Buttons from "../Buttons/Buttons";
import { FaTelegramPlane } from "react-icons/fa";

function Telegram() {
  return (
    <div className="telegram py-5">
      <Title
        title="قناة التليجرام
"
      />
      <div className="btns d-flex align-items-center justify-content-center">
        <Buttons
          title="انضم"
          link="https://t.me/Qadyaty"
          icon={FaTelegramPlane}
          className="me-3"
        />
        <Buttons
          link="https://play.google.com/store/apps/details?id=hasnaa.ms_tree.qadyaty"
          green
          title="حمل التطبيق"
        />
      </div>
    </div>
  );
}

export default Telegram;
