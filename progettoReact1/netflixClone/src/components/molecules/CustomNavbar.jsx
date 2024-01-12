import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomLogo from "../atoms/CustomLogo";
import CustomProfile from "../atoms/CustomProfile"
import './customNavbar.css'

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><CustomLogo /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><p>Home</p></Nav.Link>
            <Nav.Link href="#features" active><p>Tv Shows</p></Nav.Link>
            <Nav.Link href="#movies"><p>Movies</p></Nav.Link>
            <Nav.Link href="#added"><p>Recently Added</p></Nav.Link>
            <Nav.Link href="#list"><p>My List</p></Nav.Link>
          </Nav>
        </Container>
        <div className="d-flex justify-content-end me-5 align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex position relative mt-2 me-4">
            <img src=".\src\assets\media\kids_icon.png" alt="kids" width="30px"/>
          </div>
          <div className="d-flex position relative mt-2 me-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
          </div>
        </div> 
        <CustomProfile /> 
      </div>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
