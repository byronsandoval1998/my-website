import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

export default function BlogPost({ post }) {
  if (!post) {
    // Handle the case when the post data is not available
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="px-10 py-5 min-h-screen">
        <Link href="/?tab=blog" className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="rgb(255 251 235)"
            className="bi bi-arrow-90deg-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
            />
          </svg>
        </Link>
        <div className="mx-96">
        <h1 className="text-amber-50 text-5xl py-5 text-center">{post.title}</h1>
        <ReactMarkdown className="text-amber-50 py-8 text-xl">{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

BlogPost.propTypes = {
  post: PropTypes.object,
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths: slugs,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert the date string to a Date object
    const dateString = data.date ? data.date.toString() : null;

    return {
      props: {
        post: {
          ...data,
          date: dateString,
          content,
        },
      },
    };
  } catch (error) {
    console.error(`Error fetching post: ${params.slug}`, error);
    return {
      props: {
        post: null,
      },
    };
  }
}