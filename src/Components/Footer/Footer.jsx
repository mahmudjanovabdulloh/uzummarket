import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="footer-top">
          <nav className="footer-top-nav">
            <h2>Biz haqimizda</h2>
            <ul>
              <li>
                <Link>Topshirish punktlari</Link>
              </li>
              <li>
                <Link>Vakansiyalar</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-top-nav">
            <h2>Foydalanuvchilarga</h2>
            <ul>
              <li>
                <Link>Biz bilan bog&apos;lanish</Link>
              </li>
              <li>
                <Link>Savol-javob</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-top-nav">
            <h2>Tadbirkorlarga</h2>
            <ul>
              <li>
                <Link>Uzumda soting</Link>
              </li>
              <li>
                <Link>Sotuvchi kabinentiga kirish</Link>
              </li>
              <li>
                <Link>Topshirish punktini ochish</Link>
              </li>
            </ul>
          </nav>

          <section className="footer-top-section">
            <nav className="footer-top-section-nav">
              <h2>Ilovani yuklab olish</h2>
              <ul>
                <li>
                  <Link>
                    <FaApple className="footer-top-section-nav-icon" />{" "}
                    <span>AppStore</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaGooglePlay className="footer-top-section-nav-icon" />{" "}
                    <span>Google Play</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="footer-top-section-nav1">
              <h2>Uzum ijtimoiy tarmoqlarda</h2>
              <ul>
                <li>
                  <Link>
                    <FaInstagram
                      className="footer-top-icon1"
                      style={{ backgroundColor: "deeppink" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <RiTelegram2Fill
                      className="footer-top-icon1"
                      style={{ backgroundColor: "dodgerblue" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaFacebookF
                      className="footer-top-icon1"
                      style={{ backgroundColor: "#007ffb" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaYoutube
                      className="footer-top-icon1"
                      style={{ backgroundColor: "red" }}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </section>

        <hr className="footer-hr" />

        <section className="footer-bottom">
          <nav>
            <ul>
              <li>
                <Link>Maxfiylik kelishuvi</Link>
              </li>
              <li>
                <Link>Foydalanuvchi kelishuvi</Link>
              </li>
            </ul>
          </nav>
          <p>
            «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
