import React, {useState} from 'react'
import chuck from "../images/chuck.png"
import "../App.css"

const Button = ({defaultFrase,fraseUno,fraseDos,fraseTres,arregloDeFrases, onClick, fraseChuck}) => { 
    const [textoBoton, setTextoBoton] = useState(defaultFrase)

    const handleClick = () => {
        setTextoBoton(onClick(arregloDeFrases,textoBoton,fraseUno,fraseDos,fraseTres))
    }

    return (
        <div className="app__nuevaFrase">
        <div>
        <button  id="chuck_button" onClick={() => handleClick()} >{textoBoton}</button>
        <p>{fraseChuck}</p>
        </div>
        <img id="chuck_norris" src={chuck} alt="chuck" />
      </div>
    )
}

export default Button