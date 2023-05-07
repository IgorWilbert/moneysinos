import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import "./styles.css";

const Symbol = ({ name, summary, imageUrl }) => {
  const [rangeLabel, setRangeLabel] = useState("mes");
  const [range, setRange] = useState("1mo");
  const [interval, setInterval] = useState("1d");

  const handleChangeRangeLabel = (_, newRangeLabel) => {
    if (newRangeLabel === "ano") {
      setRange("1y");
      setInterval("5d");
    } else {
      setRange("1mo");
      setInterval("1d");
    }
    setRangeLabel(newRangeLabel);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [stockData, setStockData] = useState([
    {
      high: 0,
      date: "00/00",
    },
  ]);

  const getSymbolDataWithFetch = async (name, range, interval) => {
    const response = await fetch(
      `https://brapi.dev/api/quote/${name}?range=${range}&interval=${interval}`
    );

    const jsonData = await response.json();

    const formatted = jsonData.results[0].historicalDataPrice.map((data) => {
      const date = new Date(data.date * 1000);

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      return {
        high: data.high,
        date: `${day}/${month}`,
      };
    });
    setStockData(formatted);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      getSymbolDataWithFetch(name, range, interval);
    }
  }, [isOpen, rangeLabel]);

  return (
    <div className="symbol">
      <Accordion onChange={() => setIsOpen(!isOpen)}>
        <div className="symbol-summary">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="symbol-summary-content">
              <img className="symbol-logo" src={imageUrl} />
              <p>{`${summary} (${name})`}</p>
            </div>
          </AccordionSummary>
        </div>

        <div className="symbol-details">
          <AccordionDetails>
            <div className="symbol-details-content">
              <p>{`Última alta: ${stockData[stockData.length - 1].high}`}</p>
              <div className="symbol-graph">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={stockData}
                    margin={{
                      top: 5,
                      right: 5,
                      left: -20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="high" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="symbol-range-button">
                <ToggleButtonGroup
                  color="primary"
                  value={rangeLabel}
                  exclusive
                  onChange={handleChangeRangeLabel}
                  aria-label="Platform"
                >
                  <ToggleButton value="mes">Mês</ToggleButton>
                  <ToggleButton value="ano">Ano</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
};

export default Symbol;
