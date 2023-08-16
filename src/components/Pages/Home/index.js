import { Component } from "react";
import Header from "../../Header";
import ChatBox from "./ChatBox";
import Main from "./Main";

class Home extends Component {
 
  render() {
    const user = this.props.user;
    // const user = { ...this.props.user };
    // const { user } = this.props;
    if (!Object.keys(user).length) {
      return <div></div>;
    }
    return (
      <div className="wrapper">
        <Header user={user} />
        <Main user={user} />
        <ChatBox />
      </div>
    );
  }
}

export default Home;
