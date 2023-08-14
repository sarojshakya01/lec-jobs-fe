import { Component } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Menu from "./Menu";
import UserAccount from "./UserAccount";

class Header extends Component {
  handleLogout(event) {
    // remove session
    event.preventDefault();
    window.sessionStorage.clear();
    window.location.reload();
  }  
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-data">
            <Logo />
            <SearchBar handleSearch={this.props.handleSearch} />
            <Nav />
            <Menu />
            <UserAccount user={this.props.user} handleLogout={this.handleLogout} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
