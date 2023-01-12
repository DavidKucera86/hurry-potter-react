import "./Horcruxes.css"
import data from "./h-data"
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Horcruxes = () => {
    const [index, setIndex] = useState(0)
    const {image, title, crashedBy} = data[index]

    /* 
    === FUNCTIONS ===
    */

    const previousHorc = () => {
        setIndex((index) => {
            const newIndex = index - 1
            return checkIndex(newIndex)
        })
    }

    const nextHorc = () => {
        setIndex((index) => {
            const newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    const checkIndex = (horcIndex) => {
        if (horcIndex > data.length - 1) return 0
        else if (horcIndex < 0) return data.length -1
        else return horcIndex
    }

    /* 
    === RENDERING OUTPUT ===
    */

    return <>
        <article className="simple-horc">           
            <h2> Přehlídka Voldyho viteálů</h2>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>Viteál zničil: {crashedBy}</p>
            <button onClick={previousHorc}>
                <FaArrowAltCircleLeft />
            </button>
            <button onClick={nextHorc}>
                <FaArrowAltCircleRight />
            </button>          
        </article>
    </>
        
        
        
        
        

}

export default Horcruxes