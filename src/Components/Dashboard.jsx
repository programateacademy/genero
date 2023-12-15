import React from "react";
import  './Dashboard.css';
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
import TotalAttention from "../Page/dashboardComponents/TotalAttention/TotalAttention";
import YearButtons from "../Page/dashboardComponents/YearButtons/YearButtons";

const Dashboard = () => {
    return (
        // Container for all lot of components of DashboardComponents
        <div  className='componentsContainer'>
            <div className="column" > <BoardGraphic />
            <br></br>
            <ConditionGraphic /> </div>
            <br></br>
            <Download />
            <br></br>
            <Graphics />
            <br></br>
            <IdentityGraphic />
            <br></br>
            <SecondBoardGraphic />
            <br></br>
            <SecondGraphic />
            <br></br>
            <SexGraphic />
            <br></br>
            <SexualOrientationGraphic />
            <br></br>
            <Tittle />
            <br></br>
            <TotalAttention />
            <br></br>
            <YearButtons />
        </div>
    );
};

export default Dashboard;