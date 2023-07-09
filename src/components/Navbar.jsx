import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({setDarkmode, darkmode}) => {
   
   

    // useEffect(()=>{
    //     const moon = document.querySelector('.moon')
    //     const navbar = document.querySelector('.navbar')
    //     navbar.style.backgroundColor = darkmode ? '#2B3844' : 'white'
    //     navbar.style.color = darkmode ? 'white' : 'black'
    //     moon.src= darkmode ? './assets/moon.svg' : './assets/moon-bordered.svg'
         
    // },[darkmode])

    return(
        <div className={"navbar"}>
                <div className="flag-app">The Flag App</div>
                {/* <div onClick={()=>setDarkmode(!darkmode)} className="dark-light-mode-container">
                <img className='moon' src="./assets/moon-bordered.svg" alt="" />Dark mode</div> */}
        </div>
     )
}

export default Navbar