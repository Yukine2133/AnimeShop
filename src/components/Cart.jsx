import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  //Remove from Cart
  const handleCheckOut = (id) => {
    dispatch(checkout(id));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className="text-center text-2xl text-slate-900 ">
          Your cart is empty.
        </h1>
      ) : (
        <>
          <ul className="grid grid-cols-5  gap-4">
            {cartItems.map((item) => (
              <div className=" border" key={item.id}>
                <li className="flex-col-reverse flex text-center">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="text-green text-xl">${item.price}</p>
                  <img src={item.img} alt={item.name} />
                </li>
              </div>
            ))}
          </ul>
          <div className="flex justify-center items-center mt-20">
            <button
              onClick={handleCheckOut}
              className="py-3 px-6 rounded-mg hover:opacity-75 bg-teal-500 text-white"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

{
  /* <div className="flex justify-center items-center mt-20">
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="py-3 px-6 rounded-mg hover:opacity-75  bg-teal-500 text-white"
              >
                CheckOut
              </button>
            </div> */
}
