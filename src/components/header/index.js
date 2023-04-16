import "./styles.css";

const Header = (onClick) => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <div className="header">
        <h1 className="header-title" onClick={onClick}>
          MoneySinos
        </h1>
      </div>
    </a>
  );
};

export default Header;
