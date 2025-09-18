import { useEffect, useState } from "react";
import "./App.css";

const Notice = () => {
  const [noticeText, setNoticeText] = useState("");

  useEffect(() => {
    fetch("/notice.txt")
      .then((res) => res.text())
      .then((text) => setNoticeText(text))
      .catch(() => setNoticeText("Failed to load the notice."));
  }, []);
  
  return (
    <section className="section">
      <h2 className="page-title">Guild Notice</h2>
      <p className="page-description">
        This is the guild’s official notice. Only the Guild Leader can update it.
      </p>

      <div className="notice-box">
        <h3>Current Notice</h3>
        <p className="notice-text" style={{ whiteSpace: "pre-wrap" }}>
          {noticeText || "Loading notice..."}
        </p>
      </div>
    </section>
  );
};

export default Notice;
