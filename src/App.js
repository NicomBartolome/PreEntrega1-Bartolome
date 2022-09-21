import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a la tienda virtual de RDC Internet y TV"}></ItemListContainer>
    </div>
  );
}

export default App;
