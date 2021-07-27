import React from "react";
import "./App.css";
import { postData } from "./data";

console.log(postData.data.postsConnection.edges)
var posts_data = postData.data.postsConnection.edges

export const Posts = () => {
  return (
    <>
      <table>
        <TableHeader />
        {posts_data.map((data, key) => {
          return (
            <Post
              key={key}
              username={data.node.handle_history.username}
              date={data.node.date}
              post={data.node.post}
              postImage={data.node.image_url}
              likesCount={data.node.likes_count || 0}
              commentsCount={data.node.comments_count || 0}
              totalEngagement={data.node.likes_count + data.node.comments_count}
            />
          );
        })}
      </table>
    </>
  );
};

const TableHeader = () => {
  return (
    <tr>
      <th>Author</th>
      <th>Date</th>
      <th>Post</th>
      <th>Post Image</th>
      <th>Likes Count</th>
      <th>Comments Count</th>
      <th>Total Engagement</th>
    </tr>
  );
};

const Post = ({ username, date, post, postImage, likesCount, commentsCount, totalEngagement }) => {
  return (
    <tr>
      <td>
        <h5>{username}</h5>
      </td>
      <td>
        <h5>{date}</h5>
      </td>
      <td>
        <h4>{post}</h4>
      </td>
      <td class="image-area">
        <img src={postImage} />
      </td>
      <td>
        <p>{likesCount}</p>
      </td>
      <td>
        <p>{commentsCount}</p>
      </td>
      <td>
        <p>{totalEngagement}</p>
      </td>
    </tr>
  );
};