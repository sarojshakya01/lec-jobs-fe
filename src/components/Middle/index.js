import { Component } from "react";
import PostTopBar from "./PostTopBar";
import PostSection from "./PostSection";

class Middle extends Component {
  render() {
    const {user} = this.props
    return (
      <div className="col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <PostTopBar user={user} />
          <PostSection user={user} />
        </div>
      </div>
    );
  }
}

export default Middle;
