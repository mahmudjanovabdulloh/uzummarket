import "./Navbar.css";
import "./NavbarResponsive.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const NavbaTop = () => {
  return (
    <div className="navbar-top">
      <div className="container">
        <section className="navbar-top-wrapper">
          <section className="navbar-top-div">
            <CiLocationOn />
            <Link>Toshkent</Link>
          </section>

          <section>
            <Link className="topshirish-punkti">Topshirish punktlari</Link>
          </section>

          <nav>
            <ul>
              <li>
                <Link className="navbar-top-wrapper-Link">
                  Sotuvchi bo`lish
                </Link>
              </li>
              <li>
                <Link className="navbar-top-wrapper-Link">
                  Topshirish punktini ochish
                </Link>
              </li>
              <li>
                <Link href="">Savol-javob</Link>
              </li>
              <li>
                <Link href="">Buyurtmalarim</Link>
              </li>
            </ul>
          </nav>

          <section className="navbar-top-div1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXMI0YbqxIrIPwtiihBSgFLTDbvxwsdp6bw&s"
              alt="O'zbek flag"
              width="25"
            />
            <select>
              <option>O`zbekcha</option>
              <option>Русский</option>
            </select>
          </section>
        </section>
      </div>
    </div>
  );
};

export default NavbaTop;
