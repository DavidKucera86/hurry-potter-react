/* 
Project "Kdo zná Jindru Hrnčíře?" is the hobby project of React Developer David Kučera, who is a fan of Harry Potter.
The goal of this project is to show David's skills about React JavaScript library. In this project there are covered these issues:
- loading and processing data from API
- working with external React icons
- useState and useEffect hooks
- filtering items according to categories (conditional rendering)
- translations texts from english to czech
- CSS flex box (responsive web design), clip-path, animations

Contact: 
dvdkcr@seznam.cz
https://github.com/DavidKucera86

*/


import Characters from "./components/Characters"
// import Horcruxes from "./components/Horcruxes"
import HorcruxesSlider from "./components/HorcruxesSlider"
import { useState, useEffect } from "react"

const url = "https://hp-api.onrender.com/api/characters"

const App = () => {
  const [loading, setLoading] = useState(true)
    const [HpCharacters, setHpCharacters] = useState([])

    useEffect (() => {
        // loading data from API
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
               let finalData = data.filter((oneChar) => {
                    return oneChar["image"] !== ""
               })                
              setHpCharacters(finalData.slice())                        
                
            }) 
        setLoading(false)     
     },[])
   
     if(loading){
        return <h2>Načítání stránky...</h2>
      }
  
  return (
    <div className="container">

        <header>
          <h1>Kdo zná Jindru Hrnčíře?</h1>
        </header>
        
        <main>
            <section className="characters">            
                <Characters HpCharacters = {HpCharacters} />
            </section>        

            {/*<section className="horcruxes"><Horcruxes /></section> */}

            <section className="slider">
                <HorcruxesSlider />
            </section> 
        </main>

        <footer>
            <p> <a href="http://davidkucera.cloud">davidkucera.cloud</a></p>
        </footer>
      
    </div>
    
  )
}

export default App



