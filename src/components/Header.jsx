import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-8 flex justify-between">
      <Link to="/">
        <h1 className="text-2xl">
          <span className="font-bold text-pink-500">Anime</span>Shop
        </h1>
      </Link>
      <Link to="/cart">
        <button>
          <AiOutlineShoppingCart className=" text-2xl" />
        </button>
      </Link>
    </header>
  );
};

export default Header;
