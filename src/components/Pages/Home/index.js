import Header from "../../Common/Header";
import ChatBox from "./ChatBox";
import Main from "./Main";

const Home = (props) => {
  const user = props.user;
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
};

export default Home;
