import { Link } from "react-router-dom";
import data from "../data.json";

const Homepage = () => {
  return (
    //display products
    <div className="grid grid-cols-5 gap-4">
      {data.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <article className="border text-center flex flex-col" key={item.id}>
            <div>
              <img className="mx-auto" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <h4 className="text-light-blue">${item.price}</h4>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
