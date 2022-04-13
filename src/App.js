import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Contacts from "./Components/pages/Contact";
import Payment from "./Components/pages/Payment";
import Products from "./Components/pages/Products";
import Payment from "./Components/pages/Payment";

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
