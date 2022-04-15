import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Payment from "./pages/Payment";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes> 
        <Route path="/"element={ <Home />}/>
        <Route path="/products"element={ <Products />}/>
        <Route path="/contacts"element={ <Contacts />}/>
        <Route path="/payment"element={ <Payment />}/>
      
      </Routes>
    



      
     
      
      
      
      <Footer />
    </div>
  );
}

export default App
