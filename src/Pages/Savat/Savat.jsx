import "./Savat.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incCart,
  decCart,
  removeCart,
  removeAllCart,
} from "../../Redux/cartSlice";

const Savat = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.value);

  return (
    <main>
      <div className="container">
        <div className="savat-page">
          {data.length === 0 ? (
            <>
              <h2>Savat bo‘sh</h2>
              <Link to="/" className="buy-link">
                🛒 Mahsulot sotib olish
              </Link>
            </>
          ) : (
            <>
              {data.map((item) => (
                <div className="savat-page-divs" key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.url} alt={item.title} />
                  </Link>
                  <h2>{item.title}</h2>
                  <p>Miqdor: {item.quantity}</p>
                  <div className="savat-buttons">
                    <button onClick={() => dispatch(decCart(item))}>➖</button>
                    <button onClick={() => dispatch(incCart(item))}>➕</button>
                    <button onClick={() => dispatch(removeCart(item))}>
                      ❌
                    </button>
                    <button
                      className="clear-cart-btn"
                      onClick={() => dispatch(removeAllCart())}
                    >
                      🗑 Barchasini o‘chirish
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Savat;
