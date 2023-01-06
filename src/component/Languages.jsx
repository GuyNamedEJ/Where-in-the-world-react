import { useEffect, useState } from "react";

export default function languages({ languages }) {
  const [languagesString, setLanguagesString] = useState([]);
  const [languagesArray, setLanguagesArray] = useState([]);

  const setLanguages = () => {
    if (languages == undefined) {
      setLanguagesArray(["N/A"]);
      getLanguages();
    } else {
      setLanguagesArray(Object.values(languages));
      getLanguages();
    }
  };

  const getLanguages = () => {
    let result = "";
    for (let i = 0; i < languagesArray.length; i++) {
      i == languagesArray.length - 1
        ? (result = result + languagesArray[i] + " ")
        : (result = result + languagesArray[i] + ", ");
    }
    setLanguagesString(result);
  };

  useEffect(() => {
   setLanguages();
  }, [languagesString]);

  return <span>
    {languagesString}
  </span>;
}
