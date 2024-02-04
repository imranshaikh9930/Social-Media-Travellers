import React, { useState } from "react";
import "../components/DetailsPage.css";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DisplayCard from "./DisplayCard";
import Navbar from "./Navbar";
// ... (imports)
// ... (imports)

function DetailsPage() {
    const [isDetailClicked, setIsDetailClicked] = useState(false);
    const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  
    const { id } = useParams();
    const post = useSelector((state) =>
      state.posts.find((p) => p.id.toString() === id)
    );
  
    // Check if post is undefined before trying to access its properties
    if (!post) {
      return (
        <div className="details-page">
          <Navbar />
          <p>Loading...</p>
        </div>
      );
    }
  
    const toggleDetail = () => {
      setIsDetailClicked(!isDetailClicked);
      setIsUserInfoClicked(false);
    };
  
    const toggleUserInfo = () => {
      setIsUserInfoClicked(!isUserInfoClicked);
      setIsDetailClicked(false);
    };
  
    return (
      <div className="details-page">
        <Navbar />
        <div className="postId">
          <button>
            <NavLink to="/">
              <KeyboardBackspaceIcon />
            </NavLink>
          </button>
          <h1 className="post-name">Post Number #{id}</h1>
        </div>
  
        <div className="post-info">
          <div className="images">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
          </div>
          <div className="info">
            <div className="btn-container">
              <div>
                <button
                  onClick={toggleDetail}
                  className="detailsBtn"
                  style={{
                    backgroundColor: isDetailClicked ? "#F05A22" : "white",
                    color: isDetailClicked ? "white" : "black",
                  }}
                >
                  Detail
                </button>
              </div>
              <div>
                <button
                  onClick={toggleUserInfo}
                  className="detailsBtn"
                  style={{
                    backgroundColor: isUserInfoClicked ? "#F05A22" : "white",
                    color: isUserInfoClicked ? "white" : "black",
                  }}
                >
                  User info
                </button>
              </div>
            </div>
            <div>
              {isDetailClicked && (
                <div className="info-btns">
                  <p>{post.body}</p>
                </div>
              )}
              {isUserInfoClicked && (
                <div className="info-btns">
                  <p>Post was posted by {post.id}</p>
                </div>
              )}
            </div>
          </div>
        </div>
  
        <h2 className="most-posts">Most Posts</h2>
        <DisplayCard id={id} />
      </div>
    );
  }
  
  export default DetailsPage;
  