import "./Navbar.css";
import "./NavbarResponsive.css";
import { Link } from "react-router-dom";
import navbarlogo from "../../assets/IMGS/UZUMMARKETLOGO.png";
import { TfiBag } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const NavbarMiddle = () => {
  return (
    <div className="navbar-middle">
      <div className="container">
        <section className="navbar-middle-wrapper">
          <Link className="navbar-middle-logo-link" to="/">
            <img src={navbarlogo} alt="Uzum Market" />
          </Link>

          <button className="navbar-middle-btn">
            <TfiBag />
            <span>Katalog</span>
          </button>

          <section className="navbar-middle-search">
            <input type="search" placeholder="Search" />
            <button>
              <CiSearch className="navbar-middle-search-icon" />
            </button>
          </section>

          <ul className="navbar-middle-collection">
            <li>
              <Link to="/Kirish">
                <CiUser className="navbar-middle-collection-icon" />
                <span>Kirish</span>
              </Link>
            </li>
            <li>
              <Link to="/Saralangan">
                <CiHeart className="navbar-middle-collection-icon" />
                <span>Saralangan</span>
              </Link>
            </li>
            <li>
              <Link to="/Savat">
                <SlBasket className="navbar-middle-collection-icon" />
                <span>Savat</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NavbarMiddle;
