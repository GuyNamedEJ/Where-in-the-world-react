import { useEffect, useState } from "react";

export default function Currencies({ currency }) {
  const [currencies, setCurrencies] = useState();
  const [currencyString, setCurrencyString] = useState([]);

  const setCurrency = () => {
    if (currency == undefined) {
      setCurrencyString([{ name: "N/A" }]);
      getCurrencies();
    } else {
      setCurrencyString(Object.values(currency));
      getCurrencies();
    }
  };

  const getCurrencies = () => {
    let result = "";
    for (let i = 0; i < currencyString.length; i++) {
      i == currencyString.length - 1
        ? (result = result + currencyString[i].name + " ")
        : (result = result + currencyString[i].name + ", ");
    }

    setCurrencies(result);
  };

  useEffect(() => {
    setCurrency();
   }, [currencies]);

  return <span>{currencies}</span>;
}
