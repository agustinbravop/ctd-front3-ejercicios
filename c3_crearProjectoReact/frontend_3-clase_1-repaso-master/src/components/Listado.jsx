import React,{useState, useEffect} from 'react'
import "../App.css"

const Listado = ({listadoDeFrases}) => {
    const [frasesState, setFrasesState] = useState([])
    
    useEffect(() => {
        setFrasesState([...frasesState, listadoDeFrases])
    }, [listadoDeFrases])    

    // EJERCICIO PARA REFACTORIZAR DESPUES DEL RETURN
    return (
      <div className="app__viejasFrases">
        <h3>ULTIMAS 5 FRASES</h3>
        { frasesState.slice(-5).map(el => <p>{el}</p>) }
      </div>
    )
}

export default Listado;
