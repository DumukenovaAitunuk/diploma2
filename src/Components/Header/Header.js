import "./Header.css";
import headerImage from "../../assets/book.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>Book for everyone</h1>
      <p>This is an internet shop</p>
    </header>
  );
}

export default Header;