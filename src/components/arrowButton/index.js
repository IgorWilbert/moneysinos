import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./styles.css";

const ArrowButton = ({ onClick, isForward = true }) => (
  <div className="arrow-button" onClick={onClick}>
    {isForward ? <ArrowForwardIcon /> : <ArrowBackwardIcon />}
  </div>
);

export default ArrowButton;
