import "./Nav.css"
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
function Nav() {
    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paintdisplay=swap" rel="stylesheet"/></head>
             <Logo /> 
           
            <ul>
                <NavItem url="/">Home</NavItem>
                <NavItem url="/products">Products</NavItem>
                <NavItem url="/contacts">Contacts</NavItem>
                <NavItem url="/payment">Payment</NavItem>
            </ul>
        </nav>
     );
}

export default Nav;