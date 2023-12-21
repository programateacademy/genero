import React, { useState } from "react";
import './Dashboard.css';
import BoardGraphic from "../Page/dashboardComponents/BoardGraphic/BoardGraphic";
import ConditionGraphic from "../Page/dashboardComponents/ConditionGraphic/ConditionGraphic";
import Download from "../Page/dashboardComponents/Download/Download";
import Graphics from "../Page/dashboardComponents/Graphics/Graphics";
import IdentityGraphic from "../Page/dashboardComponents/IdentityGraphic/IdentityGraphic";
import SecondBoardGraphic from "../Page/dashboardComponents/SecondBoardGraphic/SecondBoardGraphic";
import SecondGraphic from "../Page/dashboardComponents/SecondGraphic/SecondGraphic";
import SexGraphic from "../Page/dashboardComponents/SexGraphic/SexGraphic";
import SexualOrientationGraphic from "../Page/dashboardComponents/SexualOrientationGraphic/SexualOrientationGraphic";
import Tittle from "../Page/dashboardComponents/Tittle/Tittle";
import YearButtons from "../Page/dashboardComponents/YearButtons/YearButtons";
import Data from '../assets/Services/Data/Data.json';
import Footer from "./Footer";

const Dashboard = () => {
    const [selectedAño, setselectedAño] = useState(null);
    const [selectedAñoContent, setselectedAñoContent] = useState([]);
    console.log(selectedAño) // se realiza el console para llamar la función
    const handleSelectedAño = (item) => {
        setselectedAño(item);
        const selectedYearData = Data.find((data) => data.año === item);
        setselectedAñoContent(selectedYearData ? selectedYearData.content : []);
    };

    return (
        // Container for all lot of components of DashboardComponents
        <div id='componentsContainer'>

            <div className="container-tittle">
                <Tittle />
            </div>
            <div className="column" >

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <YearButtons onYearSelect={handleSelectedAño} jsonData={Data} />
                <br></br>
                <div className="container-graphics">
                    <Graphics selectedAñoContent={selectedAñoContent} />
                    <SecondGraphic selectedAñoContent={selectedAñoContent} />
                </div>

                <div className="container-BoardGraphic">
                    <BoardGraphic selectedAñoContent={selectedAñoContent} />
                </div>
                <br></br>
                <SecondBoardGraphic selectedAñoContent={selectedAñoContent} />
                <br></br>
                {/* TODO: falta ajustar los demas componentes al responsive. */}
                <div className="container-Sex">
                    <SexGraphic selectedAñoContent={selectedAñoContent} />
                        <SexualOrientationGraphic selectedAñoContent={selectedAñoContent} />
                </div>
                <div className="container-Identity">
                    <br></br>
                    <IdentityGraphic selectedAñoContent={selectedAñoContent} />
                    <br></br>
                        <ConditionGraphic selectedAñoContent={selectedAñoContent} />


                </div>
                <br></br>

            </div>



            <Download />
            <br></br>
            <br></br>
            <Footer/>                 




        </div>
    );
};

export default Dashboard;