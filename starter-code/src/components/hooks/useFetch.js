//Creamos este archivo para no duplicar el código del useEffect (es el mismo en Home y Spain, solo cambia en end point de la api para recuperar los datos)
//vamos a necesitar tanto el hook de useEffct para engancharnos el ciclo de vida como el de useState para setear la respuesta en el estado interno (los setLoging, setDeaths, etc.)
import { useEffect, useState } from "react";

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  //En lugar de generalizar todo esto, ya que es algo es particular de cada página
  /*const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  */
  //Declaramos un genrico:
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //Como lo primero que queremos generalizar es la url, lo pasamos como argumento de setFetch
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading };
};

export default useFetch;
