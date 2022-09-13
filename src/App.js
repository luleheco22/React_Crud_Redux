import { BrowserRouter,Routes,Route } from "react-router-dom";
import EditarProducto from "./components/EditarProducto";
import Header from "./components/Header";
import NuevoProducto from "./components/NuevoProducto";
import Productos from "./components/Productos";
// Redux
import {Provider} from 'react-redux'
import store from "./store";

function App() {
  return (
    
    <BrowserRouter>
    <Provider store={store}>
   <Header/>

   <div className="container">
        <Routes>
          <Route path="/" element={<Productos />} exact/>
          <Route path="/productos/nuevo" element={<NuevoProducto />} exact/>
          <Route path="/productos/editar/:id" element={<EditarProducto />} exact/>
        </Routes>
   </div>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
