import { useEffect, useState } from "react";

import SymbolsData from "../../data/symbols";

import Symbol from "../../components/symbol";
import Stocks from "../../components/stocks";

import "./styles.css";

/*
import requests

# https://www.youtube.com/watch?v=GGkUt4hy0T8
# https://dadosabertos.bcb.gov.br/dataset/11426-indice-nacional-de-precos-ao-consumidor---amplo-ipca---nucleo-medias-aparadas-sem-suavizacao
# https://dadosabertos.bcb.gov.br/dataset/11-taxa-de-juros---selic/resource/b73edc07-bbac-430c-a2cb-b1639e605fa8
# https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
link = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11426/dados?formato=json&dataInicial=01/01/2023&dataFinal=30/01/2023"

requisicao = requests.get(link)
informacoes = requisicao.json()
print(informacoes)


# https://dadosabertos.bcb.gov.br/dataset/11-taxa-de-juros---selic


# import pprint

# pprint.pprint(informacoes)

https://cryptocointracker.com/yahoo-finance/yahoo-finance-api

https://query1.finance.yahoo.com/v11/finance/quoteSummary/PETR4.SA?modules=financialData

https://query1.finance.yahoo.com/v8/finance/chart/PETR4.SA?interval=15m&period1=1681872126&period2=1681958526


-> use close price to build graph:
https://www.google.com/search?q=stock+price+which+is+more+important+low+high+open+close&source=lmns&bih=568&biw=1366&hl=en&sa=X&ved=2ahUKEwj3lMi7lbz-AhV6O7kGHZwABYwQ0pQJKAB6BAgBEAI


*/

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
      <h1>Mercado Atual</h1>
      <div className="market-detail-rates">
        <div className="market-detail-ipca">
          <div>{`IPCA últimos 30 dias: ${marketData.ipcaPast30Days}%`}</div>
          <div>{`IPCA últimos 12 meses: ${marketData.ipcaPast12Months}%`}</div>
        </div>
        <div className="market-detail-selic">
          <div>{`SELIC últimos 30 dias: ${marketData.selicPast30Days}%`}</div>
          <div>{`SELIC últimos 12 meses: ${marketData.selicPast12Months}%`}</div>
        </div>
      </div>
      {SymbolsData.map((s) => (
        <Symbol name={s.name} summary={s.summary} imageUrl={s.imageUrl} />
      ))}
    </div>
  );
};

export default MarketDetail;
