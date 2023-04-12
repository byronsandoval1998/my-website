import Head from 'next/head';
import { Tabs } from "./Navigation/Tabs.js";
import styles from "./Navigation/Tabs.module.css";
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import About from "./About";
import Start from "./Start";
import Projects from "./Projects/Projects";
import BlogElement from "./BlogElement";
import propTypes from "prop-types";

export default function Home({ posts }) {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Byron`s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-stone-900 px-10 min-h-screen">

        <Tabs >
          <div label="Start">
            <Start />
          </div>
          <div label="About">
            <About />
          </div>
          <div label="Projects">
            <Projects />
          </div>
          <div label="Blog">
            <BlogElement posts={posts} />
          </div>
        </Tabs>
        
      </main>
    </div>
  );
}
Home.propTypes = {
  posts: propTypes.array.isRequired,
};

//this gets the query and posts instead of getInitialProps and getStaticProps
export async function getServerSideProps({ query }) {
  // Get data for blog posts
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const date = data.date ? new Date(data.date).toISOString() : null;

    return {
      data: { ...data, date },
      content,
      slug: filename.replace('.md', ''),
    };
  }).sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return {
    props: {
      posts,
    },
  };
}