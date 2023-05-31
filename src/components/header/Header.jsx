import Nav from "../../nav/Nav";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
      <h3>
          <span className="alex">achieve-software </span>(Full Stack Developer)
        </h3>
      </div>
      <Nav/>
    </div>
  );
};

export default Header;
