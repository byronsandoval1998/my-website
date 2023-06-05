import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import About from "./About";
import Start from "./Start";
import Projects from "./Projects/Projects";
import Hire from "./Hire";
import propTypes from "prop-types";

import { Tabs } from '../components/Navigation/Tabs';
import dynamic from 'next/dynamic';
import MobileMenu from "../components/Navigation/Dropdown";


export default function Home({ posts }) {
  const [activeTab, setActiveTab] = useState('Start');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <Head>
        <title>Byron`s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-stone-900 px-10 min-h-screen">
        {isMobile ? (
          
          <MobileMenu>
            <div label="Start">
              <Start />
            </div>
            <div label="Services">
              <Projects />
            </div>
            <div label="About">
              <About />
            </div>
            <div label="Blog">
              <div className="mx-auto m-0 max-w-2xl px-4 py-10">
                <h1 className="text-3xl text-amber-50 font-sans">Posts</h1>
                <ul className="mb-8 m-0 p-0">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        className="grid py-8 h-8"
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="font-thin font-sans text-amber-50 text-2xl cursor-pointer">
                          {post.data.title}
                        </span>
                      </Link>
                      <small className="text-gray-100">{post.data.createdAt}</small>
                      <p className="text-gray-300 text-md font-sans">{post.data.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MobileMenu>
        
        ) : (
          <Tabs activeTab={activeTab} onTabClick={handleTabClick}>
            <div label="Start">
              <Start />
            </div>
            <div label="Services">
              <Projects />
            </div>
            <div label="About">
              <About />
            </div>
            <div label="Portfolio">
              <div className="mx-auto m-0 max-w-2xl px-4 py-10">
                <h1 className="text-3xl text-amber-50 font-sans">Blog Posts</h1>
                <ul className="mb-8 m-0 p-0">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        className="grid py-8 h-8"
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="font-thin font-sans text-amber-50 text-2xl cursor-pointer">
                          {post.data.title}
                        </span>
                      </Link>
                      <small className="text-gray-100">{post.data.createdAt}</small>
                      <p className="text-gray-300 text-md font-sans">{post.data.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div label="Hire Me">
              <Hire />
            </div>
          </Tabs>
        )}
      </main>
    </>
  );
}
Home.propTypes = {
  posts: propTypes.array.isRequired,
}

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