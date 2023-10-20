import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./routes/Posts/Posts";
import Articles from "./routes/Articles/Articles";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element = {<>Home Page</>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/articles" Component={Articles}></Route>
        <Route path="*" element={<>Pagina nu a fost gasita</>}></Route> {/*Asterix inseamna ca daca niciuna din paths de mai sus nu a fost regasite in navbar va fi afisat elementul/componentul declarat in aceasta ruta */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
        export default App;