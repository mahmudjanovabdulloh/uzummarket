import "./Savat.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Savat = () => {
  const data = useSelector((state) => state.cart.value); // Bu yer to‘g‘ri bo‘ldi!
  console.log("Savatdagi mahsulotlar:", data);

  return (
    <main>
      <div className="container">
        <div className="savat-page">
          {data.length === 0 ? (
            <h2>Savat bo‘sh</h2>
          ) : (
            data.map((item) => (
              <div className="savat-page-divs" key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img src={item.url} alt={item.title} />
                </Link>
                <h2>{item.title}</h2>
                <p>Miqdor: {item.quantity}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Savat;
