// import Logo from "../ui/logo";
import "./Nav.css"
import NavItem from "./NavItem/NavItem";
function Nav() {
    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paintdisplay=swap" rel="stylesheet"/></head>
            {/* <Logo/> */}
            <div>Books</div>
            <ul>
                <NavItem url="/">Home</NavItem>
                <NavItem url="/products">Products</NavItem>
                <NavItem url="/contacts">Contacts</NavItem>
                <NavItem url="/contacts">Payment</NavItem>
            </ul>
        </nav>
     );
}

export default Nav;