import { useDispatch } from "react-redux";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(id));
    console.log(id);
  };

  // Find the item with the matching id
  const product = data.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="mr-16">
        <img className="border" src={product.img} />
      </div>
      <div className="flex flex-col">
        <div className="mb-16">
          <h2 className="text-xl text-slate-900">{product.name}</h2>
          <p className="mt-12 text-green text-xl ">${product.price}</p>
        </div>
        <div className=" ">
          <button
            onClick={handleAddToCart}
            className="py-3 px-6  hover:opacity-75 rounded-md bg-btn-green"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
