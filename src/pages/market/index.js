import { useEffect, useState } from "react";

import SymbolsData from "../../data/symbols";

import Rate from "../../components/rate";
import Symbol from "../../components/symbol";

import "./styles.css";

const IPCA_URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11426/dados";
const SELIC_URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados";

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${day}/${month}/${date.getFullYear()}`;
};

const getData = async (startDate, endDate, isIpca = true) => {
  const response = await fetch(
    `${
      isIpca ? IPCA_URL : SELIC_URL
    }?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`
  );

  const jsonData = await response.json();

  return jsonData;
};

const MarketDetail = () => {
  const today = new Date();
  const thirtyDaysAgo = new Date(
    new Date().setMonth(new Date().getMonth() - 1)
  );
  const oneYearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const formattedToday = formatDate(today);
  const formattedThirtyDaysAgo = formatDate(thirtyDaysAgo);
  const formattedOneYearAgo = formatDate(oneYearAgo);

  const [marketData, setMarketData] = useState({
    ipcaPast30Days: 0,
    ipcaPast12Months: 0,
    selicPast30Days: 0,
    selicPast12Months: 0,
  });

  useEffect(() => {
    getIpcaDataWithFetch();
  }, []);

  const getIpcaDataWithFetch = async () => {
    const ipcaPast30DaysData = await getData(formattedToday, formattedToday);
    const ipcaPast12MonthsData = await getData(
      formattedOneYearAgo,
      formattedToday
    );

    const selicPast30DaysData = await getData(
      formattedThirtyDaysAgo,
      formattedToday,
      false
    );
    const selicPast12MonthsData = await getData(
      formattedOneYearAgo,
      formattedToday,
      false
    );

    setMarketData({
      ipcaPast30Days: ipcaPast30DaysData[0].valor,
      ipcaPast12Months: ipcaPast12MonthsData
        .reduce((acc, d) => {
          return acc + parseFloat(d.valor);
        }, 0)
        .toFixed(2),
      selicPast30Days: selicPast30DaysData
        .reduce((acc, d) => {
          return acc + parseFloat(d.valor);
        }, 0)
        .toFixed(2),
      selicPast12Months: selicPast12MonthsData
        .reduce((acc, d) => {
          return acc + parseFloat(d.valor);
        }, 0)
        .toFixed(2),
    });
  };

  return (
    <div className="market-detail">
      <div className="market-detail-content">
        <h1>Mercado Atual</h1>
        <div className="market-detail-rates">
          <div className="market-detail-ipca">
            <Rate
              label={"IPCA últimos 30 dias"}
              value={marketData.ipcaPast30Days}
              tooltip={"Mede a inflação. Somatório de todos os dias do mês."}
              tooltipPosition={"top-start"}
            />
            <Rate
              label={"IPCA últimos 12 meses"}
              value={marketData.ipcaPast12Months}
              tooltip={"Mede a inflação. Somatório de janeiro a dezembro."}
              tooltipPosition={"bottom-end"}
            />
          </div>
          <div className="market-detail-selic">
            <Rate
              label={"SELIC últimos 30 dias"}
              value={marketData.selicPast30Days}
              tooltip={
                "Taxa básica de juros. Somatório de todos os dias do mês."
              }
              tooltipPosition={"top-start"}
            />
            <Rate
              label={"SELIC últimos 12 meses"}
              value={marketData.selicPast12Months}
              tooltip={"Taxa básica de juros. Somatório de janeiro a dezembro."}
              tooltipPosition={"bottom-end"}
            />
          </div>
        </div>
        {SymbolsData.map((s) => (
          <Symbol name={s.name} summary={s.summary} imageUrl={s.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default MarketDetail;
