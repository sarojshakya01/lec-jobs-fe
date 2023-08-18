import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Menu from "./Menu";
import UserAccount from "./UserAccount";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header-data">
          <Logo />
          <SearchBar handleSearch={props.handleSearch} />
          <Nav />
          <Menu />
          <UserAccount user={props.user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
