import Tooltip from "@mui/material/Tooltip";

import "./styles.css";

const Rate = ({ label, value, tooltip, tooltipPosition, open }) => {
  return (
    <Tooltip
      disableFocusListener
      title={tooltip}
      placement={tooltipPosition}
      arrow
      open={open}
    >
      <div className="rate">{`${label}: ${value}%`}</div>
    </Tooltip>
  );
};

export default Rate;
