import {Link} from "react-router-dom";
import logo from "../navLogo.png";

export default function NavBar(){
    return (
        <>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} className={"logo"} alt={"logo"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to={"/about"}>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    Link
                </span>
                </div>
            </div>
        </nav>
        </>
    )
}