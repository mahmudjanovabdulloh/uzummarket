import "./Navbar.css";
import "./NavbarResponsive.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom">
      <div className="container">
        <section className="navbar-bottom-wrapper">
          <nav>
            <ul className="navbar-bottom-NavUl">
              <li>
                <Link>
                  <figure>
                    <img
                      src="https://static.uzum.uz/fast_categories/Topsales.png"
                      alt="Uzum Topsales img"
                      width={"25px"}
                    />
                  </figure>
                  <span>Hafta tovarlari</span>
                </Link>
              </li>
              <li>
                <Link>
                  <figure>
                    <img
                      src="https://static.uzum.uz/fast_categories/Licv.png"
                      alt="Licv img"
                      width={"25px"}
                    />
                  </figure>
                  <span>Tugatish</span>
                </Link>
              </li>
              <li>
                <Link>
                  <figure>
                    <img
                      src="https://static.uzum.uz/fast_categories/%20vyg.png"
                      alt="%20vyg img"
                      width={"25px"}
                    />
                  </figure>
                  <span>Har kuni foyda</span>
                </Link>
              </li>
            </ul>

            <ul className="navbar-bottom-NavUl1">
              <li>
                <Link>Elektronika</Link>
              </li>
              <li>
                <Link>Maishiy texnika</Link>
              </li>
              <li>
                <Link>Kiyim</Link>
              </li>
              <li>
                <Link>Poyabzallar</Link>
              </li>
              <li>
                <Link>Aksessuarlar</Link>
              </li>
              <li>
                <Link>Go`zallik va parvarish</Link>
              </li>
              <li>
                <Link>Salomatlik</Link>
              </li>
              <li>
                <Link>Uy-ro&apos;zg&apos;or buyumlari</Link>
              </li>
              <li>
                <Link className="navbar-bottom-Link">
                  <span>Yana</span>
                  <IoIosArrowDown />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavbarBottom;
