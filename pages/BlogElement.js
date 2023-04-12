import React from 'react';
import Link from 'next/link';
import propTypes from "prop-types";


function BlogElement({ posts }) {

  return (
    <div className="mx-auto m-0 max-w-2xl px-4 py-10">
      <h1 className="text-3xl text-amber-50 font-sans">Posts</h1>
      <ul className="mb-8 m-0 p-0">
        {posts.map(post => (
   
          <li key={post.slug}>
            <Link className="grid py-8 h-8" href={`/blog/${post.slug}`}>
              <span className="font-thin font-sans text-amber-50 text-2xl cursor-pointer">{post.data.title}</span>
            </Link>
            <small className="text-gray-100">{post.data.createdAt}</small>
            <p className="text-gray-300 text-md font-sans">{post.data.description}</p>
          </li>

        ))}
      </ul>
    </div>
  );
}
BlogElement.propTypes = {
  posts: propTypes.array.isRequired,
};


export default BlogElement;