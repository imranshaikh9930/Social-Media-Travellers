import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../components/Homepage.css";

function DisplayCard() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => ({
    posts: state.posts,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="cards">
      {posts.map((post) => (
        <NavLink to={`/item/${post.id}`} className="card-container" key={post.id}>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
          <div className="card-title">
            <h4>{post.title}</h4>
          </div>
          <div className="description">
      <p>
       
          {post.body}
        <button

          style={{
            background:"transparent",color: "#F05A22",
          }}
          className="detailsBtn"
        >
            Read More

        </button>
      </p>

            <button className="Navigate-btn">
              <NavigateNextIcon />
            </button>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default DisplayCard;
