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
            
            <div className="container-tittle">
            <Tittle />
            </div>
            <div className="column" >            
            
            <br></br>
            <br></br>
            <br></br>
            <TotalAttention />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <YearButtons />
            <br></br>
            <di className="container-graphics">
            <Graphics />
            <br></br>            
            </di>
            <div className="container-Secondgraphics">
            <SecondGraphic /> 
            </div>
                       
            <br></br>
            <BoardGraphic/>
            <br></br>
            <SecondBoardGraphic />
            <br></br>
            <div className="container-Sex">
            <SexGraphic />

            <div className="container-SexualOrientation">
            <br></br>
            <SexualOrientationGraphic />
            </div>        
            </div>
            <div className="container-Identity">
            <br></br>
            <IdentityGraphic />
            <br></br>
            <div>
                
            </div>
            <div className="container-Condition">
            <ConditionGraphic />

            </div>
             </div>
            <br></br>   

            </div>

            
                     
            <Download />         
                      
                        
                        
                        
        </div>
    );
};

export default Dashboard;