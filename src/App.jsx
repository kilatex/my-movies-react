import { FooterComponent } from "./components/FooterComponent"
import { HeaderComponent } from "./components/HeaderComponent"
import { LateralComponent } from "./components/LateralComponent"
import { MainContent } from "./components/MainContent"
import { NavbarComponent } from "./components/NavbarComponent"

function App() {

  return (
    <div className="layout">
 
      <HeaderComponent></HeaderComponent>
      <NavbarComponent></NavbarComponent>

      <MainContent></MainContent>

    <LateralComponent></LateralComponent>
      
     <FooterComponent></FooterComponent>
      
    </div>
  )
}

export default App
