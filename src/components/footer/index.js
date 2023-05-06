import "./styles.css";

const Footer = (onClick) => {
  return (
    <div className="footer">
      <p className="footer-title" onClick={onClick}>
        Copyright © MoneySinos 2023
      </p>
    </div>
  );
};

export default Footer;
