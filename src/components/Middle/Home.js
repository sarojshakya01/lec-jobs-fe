import { Component } from "react";
import Header from "../Header";
import UserData from "../LeftSide/UserData";
import PostTopBar from "./PostTopBar";
import PostSection from "./PostSection";
import TagsSection from "../RightSide/TagsSection";
import { postsAPI } from "../../config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.allPosts = [];
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch(postsAPI)
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          this.setState({ posts: data });
          this.allPosts = data;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  handleSearch() {
    const formElem = document.getElementById("search-form");
    const searchKey = formElem.querySelector("#search-filter").value;

    if (searchKey.length > 3) {
      const currentPosts = [...this.state.posts];
      const filteredPosts = currentPosts.filter((post) => {
        if (post.title.toLowerCase().includes(searchKey.toLowerCase()) || post.description.toLowerCase().includes(searchKey.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({ posts: filteredPosts });
    } else {
      this.setState({ posts: this.allPosts });
    }
  }
  render() {
    const user = this.props.user;
    // const user = { ...this.props.user };
    // const { user } = this.props;
    if (!Object.keys(user).length) {
      return <div></div>;
    }
    return (
      <div className="wrapper">
        <Header user={user} handleSearch={this.handleSearch} />
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <UserData user={user} />
                  <div className="col-lg-6 col-md-8 no-pd">
                    <div className="main-ws-sec">
                      <PostTopBar user={user} />
                      <PostSection posts={this.state.posts} user={user} />
                    </div>
                  </div>
                  <div className="col-lg-3 pd-right-none no-pd">
                    <div className="right-sidebar">
                      <div
                        className="widget widget-about"
                        style={{ display: "none" }}
                      >
                        <img src="./images/lec.png" alt="" />
                        <h3>Track Time on LEC</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                          <h3>
                            <a href="./sign-in.html" title="">
                              Sign up
                            </a>
                          </h3>
                          <a href="./index.html#" title="">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div
                        className="widget widget-jobs"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior PHP Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Developer Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TagsSection />
                      <div
                        className="widget widget-jobs"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="widget suggestions full-width"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Most Viewed People</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="./images/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s4.png" alt="" />
                            <div className="sgt-text">
                              <h4>Bill Gates</h4>
                              <span>C &amp; C++ Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s5.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s6.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="view-more">
                            <a href="./index.html#" title="">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div
          className="chatbox-list"
          style={{ right: "270px", display: "none" }}
        >
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img1.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_1"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img2.png" alt="" />
              </a>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_2"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_2_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_2_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg bx">
              <a href="./index.html#" title="">
                <img src="./images/chat.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title">
                <h3>Messages</h3>
                <a href="./index.html#" title="" className="close-chat">
                  <i className="la la-minus-square"></i>
                </a>
              </div>
              <div className="chat-list">
                <div className="conv-list active">
                  <div className="usrr-pic">
                    <img src="./images/usy1.png" alt="" />
                    <span className="active-status activee"></span>
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>1:55 PM</span>
                  </div>
                  <span className="msg-numbers">2</span>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy2.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>11:39 PM</span>
                  </div>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy3.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>0.28 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
