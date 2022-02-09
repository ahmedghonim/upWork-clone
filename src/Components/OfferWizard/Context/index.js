import axios from "axios";
import { createContext, useEffect, useState } from "react";

const APIContext = createContext();

function APIProvider({ children }) {
  const [offerWizardFormData, setOfferWizardFormData] = useState({
    title: "",
    offerSpecializations: [],
    category: "",
    offerPluginTypes: [],
    offerWordpressPlugins: [],
    offerSearchTags: [
    ],
    isMultiPackages: 0,
    offerCategoryItems: [
      {
        package: "",
        projectItemId: "",
        categoryId: "",
        categoryItemId: 0,
        itemValue: "",
      },
    ],
    offerCategoryServices: [
      {
        package: "standard",
        projectServiceId: 1,
        categoryId: 1,
        categoryServiceId: 0,
      },
    ],
    offerAdditions: [
      {
        categoryId: 1,
        type: "",
        fastDeliveryDays: 1,
        extraPrice: 500,
        additionalDays: 0,
        projectItemId: 0,
        projectServiceId: 0,
        title: "",
        description: "",
      },
    ],
    offerCategoryServices: [
      {
        package: "standard",
        projectServiceId: 1,
        categoryId: 1,
        categoryServiceId: 0,
      },
    ],
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

  const handleCheckboxFormChange = (value, type) => {
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
  
  const handleTextFormChange = (value, type) => {
    setOfferWizardFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  const handleRadioFormChange = (value, type) => {
    setOfferWizardFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  

  const value = {
    offerWizardFormData,
    setOfferWizardFormData,
    wordpressPluginDB,
    specializationDB,
    categoryDB,
    pluginTypeDB,
    handleCheckboxFormChange,
    handleTextFormChange,
    handleRadioFormChange,
    
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}
export { APIProvider, APIContext };
