import React from "react";
import { useTranslation } from 'react-i18next'
import HomeUser from "../../Components/HomeUser";

const Home = () => {
    const { t } = useTranslation()
  return (
    <div >
     <HomeUser/>
    
    </div>
  );
};
export default Home;




// "days_since_release": "it's been {{number_of_days}} days since this video was released"
// "days_since_release": "لقد مرت {{number_of_days}} أيام على إصدار هذا الفيديو"