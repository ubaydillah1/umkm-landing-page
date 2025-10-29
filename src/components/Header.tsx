import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[90px] text-center flex-between top-0 w-full max-w-[1200px] mx-auto left-1/2 -translate-x-1/2 fixed px-4 sm:px-0">
      <Link to={"/"} className="text-2xl font-bold">
        Madura<span className="text-primary">Kita</span>
      </Link>
    </header>
  );
};

export default Header;
