import { BrowserRouter, Routes, Route} from "react-router-dom";
import DefautPage from "src/pages/DefaultPage";
import Home from "src/pages/Home";
import Formulario from "src/pages/Formulario";
import SobreNos from "./pages/SobreNos";
import Work from "./pages/Work";

export default function RoutesApp() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefautPage />}>
            <Route index element={<Home />} />
            <Route path="/form" element={<Formulario />} />
            <Route path="/sobre_nos" element={<SobreNos/>} />
            <Route path="/work" element={<Work/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

