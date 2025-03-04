import "./DataSingleRoute.css";
import { DATA } from "../../Mock/index";
import { useParams } from "react-router-dom";

const DataSingleRoute = () => {
  const { id } = useParams();
  const data = DATA.find((item) => item.id.toString() === id);

  if (!data) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="data-single-route">
      <img src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>Price: {data.price} $</p>
      <p>Category: {data.category}</p>
      <button>Buy</button>
    </div>
  );
};

export default DataSingleRoute;
