import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./styles.css";

const FlipButton = ({ onClick }) => (
  <div className="flip-button" onClick={onClick}>
    <ArrowUpwardIcon />
    <ArrowDownwardIcon />
  </div>
);

export default FlipButton;
