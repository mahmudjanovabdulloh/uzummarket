import "./Products.css";
import { Link } from "react-router-dom";
import { DATA } from "../../Mock/index";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { incCart } from "../../Redux/cartSlice";
import { addToLikes, removeFromLikes } from "../../Redux/likeSlice";

const Products = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likes);

  return (
    <main>
      <div className="container">
        <section className="products-wrapper">
          <h1>Mashhur</h1>
          <div className="products">
            {DATA.map((item, index) => {
              const isLiked = likedItems.some((el) => el.id === item.id);

              return (
                <section className="products-card" key={index}>
                  <div className="like-icon">
                    <AiOutlineHeart
                      className={`heart-icon ${isLiked ? "liked" : ""}`}
                      onClick={() =>
                        dispatch(
                          isLiked ? removeFromLikes(item) : addToLikes(item)
                        )
                      }
                    />
                  </div>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.url} alt={item.title} width={"100%"} />
                  </Link>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <p>{item.category}</p>
                  <button onClick={() => dispatch(incCart(item))}>
                    <TbShoppingBagPlus className="product-cart-icon-shop" />
                  </button>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
