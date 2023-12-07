import { useState } from "react"
import { FooterComponent } from "./components/FooterComponent"
import { HeaderComponent } from "./components/HeaderComponent"
import { LateralComponent } from "./components/LateralComponent"
import { MainContent } from "./components/MainContent"
import { NavbarComponent } from "./components/NavbarComponent"

function App() {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <div className="layout">
 
      <HeaderComponent></HeaderComponent>
      <NavbarComponent></NavbarComponent>

      <MainContent moviesList={moviesList} setMoviesList={setMoviesList}></MainContent>

    <LateralComponent setMoviesList={setMoviesList}></LateralComponent>
      
     <FooterComponent></FooterComponent>
      
    </div>
  )
}

export default App
