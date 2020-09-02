import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import FetchPosts from "./components/FetchPosts";
import PostDetails from "./components/PostDetails";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Apps</h1>
        <BrowserRouter>
          <div>
            <Route path="/" component={FetchPosts} exact />
            <Route path="/postdetail:id" component={PostDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
