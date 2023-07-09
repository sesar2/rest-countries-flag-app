import { useLayoutEffect, useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ region, setRegion, darkmode }) => {
  const [openDropdown, setopenDropdow] = useState(false);
  const [chosenRegion, setChosenRegion] = useState("Filter By Region");
  const regions = ["All regions", "Africa", "Americas", "Asia", "Europe"];
  
  
  useEffect(()=>{
    const dropdown = document.querySelector('.choose-region')
    const dropdownList = document.querySelector('.dropdown-list')
    const arrow = document.querySelector('.arrow-down')


    darkmode ? arrow.src='./assets/arrow-down-light.svg' : arrow.src='./assets/arrow-down-dark.svg'
    darkmode ? dropdown.style.backgroundColor = '#2B3844' : dropdown.style.backgroundColor = 'white'
    darkmode ? dropdown.style.color = 'white' : dropdown.style.color = 'black'

    if(dropdownList){
      darkmode ? dropdownList.style.backgroundColor = '#2B3844' : dropdownList.style.backgroundColor = 'white'
      darkmode ? dropdownList.style.color = 'white' : dropdownList.style.color = 'black'

    }


  }, [darkmode])
 
 

  return (
    <div className="dropdownmeny">
      <div
        onClick={ () => setopenDropdow((prev) => !prev)}
        className="choose-region"
      >
        {" "}
        {chosenRegion}{" "}
        <img className="arrow-down" src="./assets/arrow-down-dark.svg" alt="" />{" "}
      </div>
      <div className="dropdown-list-container">
        {openDropdown ? (
          <div className="dropdown-list">
            {regions.map((region, i) => (
              <div
                onClick={() => {
                  setRegion(region);
                  setChosenRegion(region)
                }}
                className="dropdown-item"
                key={i}
              >
                {region}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
