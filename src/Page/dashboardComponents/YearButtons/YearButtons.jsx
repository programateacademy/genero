import React, {useState} from "react";
import './YearButtons.css'; 

const YearButtons = ({ onYearSelect, jsonData }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  console.log(selectedYear);
  const allYears = jsonData.map((item) => item.año);
  const buttonClassNames = ['ButtonOne', 'ButtonTwo', 'ButtonThree', 'ButtonFour', 'ButtonFive'];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    onYearSelect(year);
  };

 
  return (
    <div className="ButtonsContainer">
      {allYears.map((year, index) => (
        <div key={year} className={`Button ${buttonClassNames[index]}`}>
          <button
          key={year}
          className={`Button ${buttonClassNames[index]}`}
          onClick={() => handleYearSelect(year)}>
          {year}
          </button>
        </div>
      ))}
  
    </div>
  );
}


export default YearButtons;