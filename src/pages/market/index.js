import { useEffect, useState } from "react";

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
*/

const Market = () => {
  const [ipcaData, setIpcaData] = useState([{ valor: 0 }]);

  useEffect(() => {
    getIpcaDataWithFetch();
  }, []);

  const getIpcaDataWithFetch = async () => {
    const response = await fetch(
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11426/dados?formato=json&dataInicial=01/01/2023&dataFinal=30/01/2023"
    );

    const jsonData = await response.json();

    setIpcaData(jsonData);
  };

  return (
    <div className="market">
      <h1>Mercado Atual</h1>
      <div>{`IPCA: ${ipcaData[0].valor}`}</div>
    </div>
  );
};

export default Market;
