import { useEffect, useState } from "react";

export default function NativeNames({ nativeName }) {
    const [nativeNames, setNativeNames] = useState();
    const [nativeNameArray, setNativeNameArray] = useState([]);

  function setNameArr(){
    if (nativeName == undefined) {
      setNativeNameArray([{ common: "No Native Names" }]);
      getNames();
    } else {
      setNativeNameArray(Object.values(nativeName));
      getNames();
    }
  };

  const getNames = () => {
    let result = "";

    for (let i = 0; i < nativeNameArray.length; i++) {
      i == nativeNameArray.length - 1
        ? (result = result + nativeNameArray[i].common + " ")
        : (result = result + nativeNameArray[i].common + ", ");
    }
    setNativeNames(result);
  };

  useEffect(() => {
   setNameArr();
  }, [nativeNameArray]);

  return <span>
    {nativeNames}
  </span>;
}
