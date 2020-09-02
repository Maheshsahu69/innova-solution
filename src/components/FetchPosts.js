import React from "react";
class FetchPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      item: "",
    };
  }

  componentDidMount() {
    this.getPostData();
  }
  postDetails = (userid, index) => {
    this.props.history.push("postdetail:" + userid);
  };
  getPostData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result });
        console.log(this.state.data);
      });
  };
  render() {
    return (
      <div>
        {this.state.data.map((item, index) => {
          return (
            <div key={item.id} className="container">
              <div className="box">
                <div>{index}</div>
                <div>
                  <b>Title :</b> {item.title}
                </div>
                <div
                  className="user-details"
                  onClick={() => this.postDetails(item.userId, index)}
                >
                  <div className="ui primary basic button">User Details </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FetchPosts;
