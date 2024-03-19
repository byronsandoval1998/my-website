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


export default function Home() {
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
        <a className="text-7xl text-gray-200">Website under construction...</a>
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