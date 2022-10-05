import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda virtual de RDC Internet y TV"} />} />
          <Route path="/category/:categoryName" element={<ItemListContainer  />} />
          <Route path="/item/:productID" element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
