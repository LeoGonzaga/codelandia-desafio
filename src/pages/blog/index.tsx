import React from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/post/Post"
import { MaxContainer } from "./styles";

const BlogPage: React.FC = () => {
  return (
    <MaxContainer>
      <Header />

      <Post/>
    </MaxContainer>
  );
};

export default BlogPage;
