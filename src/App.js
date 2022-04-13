import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <Products />
      <Contacts />
      <Payment />
      <Footer />
    </div>
  );
}

export default App
