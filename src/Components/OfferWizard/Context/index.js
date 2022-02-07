import axios from "axios";
import { createContext, useEffect, useState } from "react";

const APIContext = createContext();

function APIProvider({ children }) {
  const [offerWizardFormData, setOfferWizardFormData] = useState({
    specialization: [],
    pluginType: [],
    wordPressPlugins: [],
    category:[]
  });

  const [specializationDB, setSpecializationDB] = useState("");
  const [categoryDB, setCategoryDB] = useState("");
  const [pluginTypeDB, setPluginTypeDB] = useState("");
  const [wordpressPluginDB, setWordpressPluginDB] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}specialization`, {
        headers: { Accept: "application/json" },
      })
      .then(({ data }) => setSpecializationDB(data))
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_URL_API}category`, {
        headers: { Accept: "application/json" },
      })
      .then(({ data }) => setCategoryDB(data))
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_URL_API}plugin-type`, {
        headers: { Accept: "application/json" },
      })
      .then(({ data }) => setPluginTypeDB(data))
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_URL_API}wordpress-plugin`, {
        headers: { Accept: "application/json" },
      })
      .then(({ data }) => setWordpressPluginDB(data))
      .catch((err) => console.log(err));
  }, []);

  const handleFormChange = (value, type) => {
    if (offerWizardFormData[type].includes(value)) {
      setOfferWizardFormData((prevState) => ({
        ...prevState,
        [type]: offerWizardFormData[type].filter((_data) => _data !== value),
      }));
    } else {
      setOfferWizardFormData((prevState) => ({
        ...prevState,
        [type]: [...offerWizardFormData[type], value],
      }));
    }
  };

  const value = {
    offerWizardFormData,
    setOfferWizardFormData,
    wordpressPluginDB,
    specializationDB,
    categoryDB,
    pluginTypeDB,
    handleFormChange,
  };
  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}
export { APIProvider, APIContext };
