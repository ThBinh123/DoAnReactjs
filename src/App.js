import "./App.css";
import Header from "./compenents/header/header";
import { Route,Routes} from "react-router-dom";
import Product from "./compenents/prouducts/Product";
import Product2 from "./compenents/product2/Product2";
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/GIAYBONGDA" element={<Product/>}></Route>
      <Route path="/PHUKIEN" element={<Product2/>}></Route>
    </Routes>
    </div>
  );
}
export default App;
