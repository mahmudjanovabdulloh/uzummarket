import "./Saralangan.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes } from "../../Redux/likeSlice";

const Saralangan = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likes);

  return (
    <main>
      <div className="container">
        <div className="saralangan-page">
          <h1>Saralangan Mahsulotlar</h1>
          {likedItems.length === 0 ? (
            <p>Hali hech qanday mahsulot yoqtirilmagan.</p>
          ) : (
            <div className="products">
              {likedItems.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.url} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <button onClick={() => dispatch(removeFromLikes(item))}>
                    O‘chirish
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Saralangan;
