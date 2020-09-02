import React, { useEffect, useState } from "react";
import "./PostDetails.css";

const PostDetails = (props) => {
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let idTrim = props.match.params.id.slice(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idTrim}`)
      .then((res) => res.json())
      .then((res) => {
        setUserid(res.id);
        setTitle(res.title);
        setBody(res.body);
      });
      hello();
  });
  const hello = () => {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  return (
    <div>
      <button id="myBtn" onClick={hello}>
        Open Modal
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="ui card">
            <div className="content">
              <div className="description">
                <p>
                  <b> User Id : </b>
                  {userid}
                </p>
                <p>
                  <b> Title : </b> <br />
                  {title}
                </p>
                <p>
                  <b>Body : </b> <br />
                  {body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
