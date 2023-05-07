import "./styles.css";

const Button = ({ onClick, label, small = false }) => (
  <button className={`button ${small ? "button-small" : ""}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
