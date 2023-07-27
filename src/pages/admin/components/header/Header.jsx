import { Link } from "react-router-dom";
import { images } from "../../../../constants";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4">
      {/* logo */}
      <Link to="/">
        <img src={images.Logo} alt="logo" className="w-16" />
      </Link>
      {/* menu burger Icon */}
      <div className="cursor-pointer">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {/* sidebar container */}
      {isMenuActive && (
        <div className="fixed inset-0">
          {/* underlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenuHandler}
          />
          {/* Sidebar content here...*/}
          <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4">
            <Link to="/">
              <img src={images.Logo} alt="logo" className="w-16" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
