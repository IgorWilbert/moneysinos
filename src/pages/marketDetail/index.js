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

const MarketDetail = () => {
  const [ipcaData, setIpcaData] = useState([{ valor: 0 }]);
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    getIpcaDataWithFetch();
  }, []);

  const getIpcaDataWithFetch = async () => {
    const response = await fetch(
      "https://brapi.dev/api/quote/PETR4?range=1mo&interval=1d"
    );

    const jsonData = await response.json();
    console.log(jsonData);

    // const data = jsonData[0].indicators.quote[0].close;
    // console.log(data);

    setIpcaData(jsonData);
  };

  return (
    <div className="marketDetail">
      <h1>Mercado Atual</h1>
      <div>{`IPCA: ${ipcaData[0].valor}`}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={stockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketDetail;
