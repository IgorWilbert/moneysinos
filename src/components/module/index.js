import ArrowButton from "../arrowButton";

import "./styles.css";

const Module = ({ title, description, imageUrl, linkUrl }) => (
  <a href={linkUrl} style={{ textDecoration: "none" }}>
    <div
      className="module"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="module-text">
        <h2 className="module-title">{title}</h2>
        <p className="module-description">{description}</p>
      </div>
      <div className="module-button">
        <ArrowButton />
      </div>
    </div>
  </a>
);

export default Module;
