import { BrowserRouter } from 'react-router-dom'
import Equipe from './components/equipe/Equipe'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sobre from './components/sobre/Sobre'
import Home from './pages/home/Home'
import Tech from './components/tech/Tech'
import Futuro from './components/futuro/Futuro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
         <Home />
         <Equipe />
         <Sobre />
         <Tech />
         <Futuro />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App