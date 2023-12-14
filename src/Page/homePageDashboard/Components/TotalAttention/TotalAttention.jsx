import React from "react";
import './TotalAttention.css';

const TotalAttention = () => {
    return(
        <div className="wrapperContainer">
            {/* First container*/}
            <div className="totalAttentionContainer">
                <div className="totalAttentionText">
                    <h2>Atenciones totales</h2>
                </div>
            </div>

            {/* On one file is container two and three */}
            <div className="rowContainer">
                {/* Second container */}
                <div className="totalRowContainer">
                    <div className="totalRowText">
                        <h3>Total del 2019 al 2023</h3>
                    </div>
                </div>

                {/* Third container */}
                <div className="numberContainer">
                    <div className="numberText">
                        <h3>54.552</h3>
                    </div>
                </div>
            </div>

            {/* Container four and five in a row, below the previous row */}
            <div className="rowContainer">
                {/* Fourth container */}
                <div className="filterContainer">
                    <div className="filterText">
                        <h3>Total año filtrado</h3>
                    </div>
                </div>

                {/* Fifth container */}
                <div className="totalFilterContainer">
                    <div className="totalFilterText">
                        <h3>0</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalAttention;