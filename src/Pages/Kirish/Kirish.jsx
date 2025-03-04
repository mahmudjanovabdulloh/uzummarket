import "./Kirish.css";
import { Link } from "react-router-dom";

const Kirish = () => {
  return (
    <main>
      <div className="container">
        <section className="kirish">
          <h1 className="kirish-heading">Telefon raqamini kiriting</h1>
          <br />
          <p>Tasdiqlash kodini SMS orqali yuboramiz</p>

          <section className="kirish-form">
            <input type="tel" placeholder="+998 00 000-00-00" />
            <button>Kodni olish</button>
          </section>

          <p className="kirish-paragraph">
            Avtotizatsiyadan o&apos;tish orqali siz{" "}
            <span>
              <Link>
                shaxsiy ma&apos;lummotlarni qayta ishlash siyosatiga rozilik
                bildirasiz
              </Link>
            </span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Kirish;
