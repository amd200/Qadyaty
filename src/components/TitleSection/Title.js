import React from "react";
import "./Title.css"
import { useImage } from "react-image";

function Title(props) {
  const { src: notesSrc, isLoading: notesLoading } = useImage({
    srcList: "imgs/notes.svg",
  });
  return (
    <div className="title-section">
      {props.isVisible && !notesLoading && <img src={notesSrc} alt="notes" width={104} height={94} />}
      <h3>{props.title}</h3>
      <p>
        ما الذي ستخسره الشركات العالمية المندرجة في لوائح المـقاطعة؟ وهل الأثر
        يعود فقط
      </p>
    </div>
  );
}

export default Title;
