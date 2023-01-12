import "./Characters.css"
import "./filteringButtons"
import filteringButtons from "./filteringButtons"
import { useState } from "react"

const Characters = (props) => {
    
    const [filterButton, setFilterButton] = useState("Všichni")

    /* 
    === FUNCTIONS ===
    */

    const writeHouse = (item) => {
        if (item !== "") {
            return <li>kolej: {translate2Cz(item)}</li>
        } else return ""
    }

    const writeWand = (wood, core, length) => {
        if(wood !== "" && core !== "" && length !== ""){
            return <li>hůlka: {translate2Cz(wood)}, {translate2Cz(core)}</li>
        } else return ""
    }

    const writePatronus = (item) => {
        if (item !== "") {
            return <li>patron: {translate2Cz(item)}</li>
        } else return ""
    }

    const translate2Cz = (item) => {
        switch(item) {
            case "Ravenclaw": return "Havraspár"
            case "Hufflepuff": return "Mrzimor"
            case "Gryffindor": return "Nebelvír"
            case "Slytherin": return "Zmijozel"
            case "holly": return "cesmínové dřevo"
            case "phoenix feather": return "pero fénixe"
            case "vine": return "dřevo vlašského ořechu"
            case "dragon heartstring": return "blána z dračího srdce"
            case "willow": return "vrbové dřevo"
            case "unicorn tail-hair": return "žíně Jednorožce"
            case "hawthorn": return "hlohové dřevo"
            case "ash": return "jasanové dřevo"
            case "unicorn hair": return "žíně Jednorožce"
            case "cherry": return "třešňové dřevo"
            case "cypress": return "cypřišové dřevo"
            case "walnut": return "dřevo vlašského ořechu"
            case "yew": return "tisové dřevo"
            case "cedar": return "cedrové dřevo"
            case "birch": return "břízové dřevo"
            case "elm": return "jilmové dřevo"
            case "stag": return "jelen"
            case "otter": return "vydra"
            case "tabby cat": return "mourovatá kočka"
            case "swan": return "labuť"
            case "doe": return "laň"
            case "hare": return "zajíc"
            case "horse": return "kůň"
            case "wolf": return "vlk"
            case "weasel": return "lasička"
            case "lynx": return "rys"
            case "persian cat": return "perská kočka"
            default: return item
        }
    }

    const filteredCharacters = (buttonName, characters) => {
        const finalCharacters = characters.filter((oneChar) => {
            switch(buttonName){                
                case "Studenti": return oneChar["hogwartsStudent"] === true                 
                case "Učitelé": return oneChar["hogwartsStaff"] === true                 
                case "Nebelvír": return oneChar["house"] === "Gryffindor"                 
                case "Zmijozel": return oneChar["house"] === "Slytherin"                 
                case "Havraspár": return oneChar["house"] === "Ravenclaw"                 
                case "Mrzimor": return oneChar["house"] === "Hufflepuff"                 
                case "Všichni": return oneChar["image"] !== ""                 
                default: return oneChar["image"] !== ""
            }
        })
        return finalCharacters
    }

    /* 
    === RENDERING OUTPUT ===
    */
   
    return <div>
        <div className="filtering-buttons">           
           {
            filteringButtons.map((oneButton, index) => { // loading buttons file
                return <button key={index} onClick={() => setFilterButton(oneButton)}>{oneButton}</button>
            })
           }
        </div>

        <div className="all-characters">
        {
                filteredCharacters(filterButton,props.HpCharacters).map((oneChar, index) => {
                    return <div className="one-char" key={index}>                                
                        
                                <img src={oneChar["image"]} alt="" />                            
                                <ul>
                                    <li><strong>{oneChar["name"]}</strong></li>  
                                    {writeHouse(oneChar["house"])}                                
                                    {writeWand(oneChar["wand"]["wood"], oneChar["wand"]["core"])}
                                    {writePatronus(oneChar["patronus"])} 
                                    <li>herec: {oneChar["actor"]}</li>
                                </ul>                          
                            </div>
                })
            }
        </div>
    </div>
    
}

export default Characters


