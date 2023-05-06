import FlipIcon from "@mui/icons-material/Flip";

import "./styles.css";

const FlipButton = ({ onClick }) => (
  <div className="flip-button" onClick={onClick}>
    <FlipIcon />
  </div>
);

export default FlipButton;
