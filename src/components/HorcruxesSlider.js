import "./HorcruxesSlider.css"
import data from "./h-data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const HorcruxesSlider = () => {
    const [index, setIndex] = useState(0)

    // images go in circle
    useEffect(() => {
        if (index < 0) setIndex(data.length - 1)
        else if (index > data.length - 1) setIndex(0)
    },[index])

    // automatic shifting
    useEffect(() => {
        let setIntervalId = setInterval(() => {
            setIndex(index + 1)                     // direction
        }, 4000)                                    // velocity           
        return () => clearInterval(setIntervalId)   // cleanup function
    },[index])

    /* 
    === RENDERING OUTPUT ===
    */

    return <section className="all-horc">
        <h2>Přehlídka Voldyho viteálů</h2>
        <div className="all-horc-content">
            {
                data.map((oneHorc, oneHorcIndex) => {
                    const {id, title, image, crashedBy} = oneHorc

                    let mainClass = "next-slide"

                    if (oneHorcIndex === index) mainClass = "active-slide"
                    if (oneHorcIndex === index - 1 || (index === 0 && oneHorcIndex === data.length - 1)) mainClass = "last-slide"

                    return <article key={id} className={mainClass}>
                        <img src={image} alt="" />
                        <h3>{title}</h3>
                        <p>Viteál zničil: {crashedBy}</p>
                    </article>
                })
            }
        </div>
        <button onClick={() => setIndex(index - 1)}>
            <FaArrowAltCircleLeft />
        </button>
        <button onClick={() => setIndex(index + 1)}>
            <FaArrowAltCircleRight />
        </button>

    </section>
}

export default HorcruxesSlider

