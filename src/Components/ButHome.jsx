import React from 'react'
import { useNavigate } from 'react-router-dom';
import icon_home from "/images/icon-home.svg";
export default function ButHome() {
        const navigate = useNavigate();

            const handleGoDashButton = () => {
  
    // lógica para listar
     navigate('/panel');
  };
  return (
     <button className='p-3 shadow-md bg-fm-Pale-orange rounded-full hover:cursor-pointer active:scale-95' onClick={handleGoDashButton}> <img className="w-5" src={icon_home}></img> </button>
  )
}
