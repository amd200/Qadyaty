import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="title-section">
      {props.isVisible && <img src="imgs/notes.svg" alt="notes" width={104} height={94} />}
      <h3>{props.title}</h3>
      <p>
        ما الذي ستخسره الشركات العالمية المندرجة في لوائح المـقاطعة؟ وهل الأثر
        يعود فقط
      </p>
    </div>
  );
}

export default Title;
