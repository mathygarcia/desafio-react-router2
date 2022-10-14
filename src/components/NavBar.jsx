import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap"; 
import "../assets/css/nav.css";

const NavBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#/">
            <img className="img-icon" src="https://i.postimg.cc/G3sC2KyC/puntero.png" ></img>
        </Navbar.Brand>
        <div className="navlink">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            Home
          </NavLink>

          {/* {"--------------"} */}

          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/pokemones"
          >
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  )
}
export default NavBar;

/* function BasicExample() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1>icono</h1>
        </Navbar.Brand>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            Home
          </NavLink>

          {"---"}

          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/pokemones"
          >
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample; */
