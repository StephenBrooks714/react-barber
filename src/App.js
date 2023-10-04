// import logo from './logo.svg';
import './App.css';
import NavBar from "./navigation/NavBar";
import {Link} from "react-router-dom";
import Card from "./pages/Cards";
import Announce from "./pages/Announcements";

function App() {
  return (
    <>
    <NavBar />
      <section className={"home-bg"}>
        <div className={"container-fluid"}>
          <div className={"row justify-content-center align-items-center"}>
            <div className={"col-md-10"}>
              <h1 className={"text-white mb-3 display-4 fw-bold"}>React with Barber Shop</h1>
              <Link to={"/"} className={"btn me-2 btn-primary rounded-pill"}>Book With Us</Link>
              <Link to={"/"} className={"btn me-2 btn-outline-light rounded-pill"}>Our Gallery</Link>
            </div>
          </div>
        </div>
      </section>
      <main className={"container my-5 py-3"}>
        <Card />
        <Announce />
      </main>
    </>
  );
}

export default App;
